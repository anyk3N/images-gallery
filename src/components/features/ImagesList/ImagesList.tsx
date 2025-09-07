import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ImageCard from "components/UI/ImageCard/ImageCard"
import ImageModal from "components/features/ImageModal/ImageModal"
import Selector from "components/UI/Selector/Selector"
import Loader from "components/UI/Loader/Loader"
import Pagination from "components/features/Pagination/Pagination.tsx"

import { fetchImages, fetchPhotosByCategory } from "api/ImageService.ts"
import { useFetching } from "hooks/useFetching"
import { useModalGallery } from "hooks/useModalGallery"

import { mainSortOptions, searchSortOptions } from "constants/sortOptions"
import type { UnsplashPhoto } from "types/types"

import styles from "components/features/ImagesList/ImagesList.module.css"

const perPage = 12

type ImagesListProps = {
  searchQuery: string
}

const ImagesList = ({ searchQuery }: ImagesListProps) => {
  const { category } = useParams<{ category: string }>()
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([])
  const [totalPages, setTotalPages] = useState<number>(100)
  const [currentPage, setCurrentPage] = useState(1)

  const isSearch = Boolean(category)
  const sortOptions = isSearch ? searchSortOptions : mainSortOptions

  const { modalIndex, openModal, closeModal, handlePrev, handleNext } =
    useModalGallery(photos)

  const [fetchPhotos, isLoading, error] = useFetching(
    async (query: string | undefined, page: number, perPage: number) => {
      const images = query
        ? await fetchPhotosByCategory(query, page, perPage)
        : await fetchImages(page, perPage)
      setPhotos(images)
      setTotalPages(totalPages)
    },
  )

  useEffect(() => {
    fetchPhotos(searchQuery || category, currentPage, perPage)
  }, [searchQuery, category, currentPage])

  return (
    <section className={styles.photosSection}>
      <Selector options={sortOptions} defaultValue={sortOptions[0].name} />

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
