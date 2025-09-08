import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ImageCard from "components/UI/ImageCard/ImageCard"
import ImageModal from "components/features/ImageModal/ImageModal"
import Selector from "components/UI/Selector/Selector"
import Loader from "components/UI/Loader/Loader"
import Pagination from "components/features/Pagination/Pagination.tsx"

import { fetchPhotosByCategory } from "api/ImageService.ts"
import { useFetching } from "hooks/useFetching"
import { useModalGallery } from "hooks/useModalGallery"

import { searchSortOptions } from "constants/sortOptions"
import type {ImagesListProps, UnsplashPhoto} from "types/types"

import styles from "components/features/ImagesList/ImagesList.module.css"

const perPage = 12

const ImagesList = ({ searchQuery }: ImagesListProps) => {
  const { category } = useParams<{ category: string }>()
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([])
  const [totalPages, setTotalPages] = useState<number>(100)
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState<string>("searchSortOptions[0].value")

  const { modalIndex, openModal, closeModal, handlePrev, handleNext } =
    useModalGallery(photos)

  const [fetchPhotos, isLoading, error] = useFetching(
    async (query: string | undefined, page: number, perPage: number, sort: string) => {
      const images = query
        ? await fetchPhotosByCategory(query, page, perPage,sort)
        : await fetchPhotosByCategory(query, page, perPage,sort)
      setPhotos(images)
      setTotalPages(totalPages)
    },
  )

  useEffect(() => {
    fetchPhotos(searchQuery || category, currentPage, perPage, sort)
  }, [searchQuery, category, currentPage, sort])

  return (
    <section className={styles.photosSection}>
      <Selector
          options={searchSortOptions}
          defaultValue={searchSortOptions[0].name}
          onSortChange={setSort}
      />

      {error && <h1>Произошла ошибка {error}</h1>}
      {isLoading && <Loader />}

      {!isLoading && photos.length > 0 && (
        <>
          <div className={styles.themeGrid}>
            {photos.map((photo, idx) => (
              <ImageCard
                key={photo.id}
                title={photo.alt_description}
                url={photo.urls.regular}
                onClick={() => openModal(idx)}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className={styles.paginationWrapper}>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </>
      )}

      {!isLoading && photos.length === 0 && (
        <>
          <div className={styles.noPhotoTitle}>
            The search didn't yield any results, please try{" "}
            <span className={styles.noPhotoTitleSpan}>again.</span>
          </div>
        </>
      )}

      {modalIndex !== null && (
        <ImageModal
          photos={photos.map((photo) => ({
            url: photo.urls.regular,
            title: photo.alt_description,
          }))}
          currentIndex={modalIndex}
          onClose={closeModal}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  )
}

export default ImagesList
