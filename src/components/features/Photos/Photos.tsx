import { useEffect, useState } from "react";
import PhotoCard from "../../UI/PhotoCard/PhotoCard";
import styles from "../Photos/Photos.module.css";
import type { UnsplashPhoto } from "../../../types/types"
import { useParams } from "react-router-dom";
import { fetchPhotos, fetchPhotosByCategory } from "../../../utils/fetcher"
import PhotoModal from "../PhotoModal/PhotoModal";
import { searchSortOptions, mainSortOptions } from "../../../constants/sortOptions";
import Selector from "../../UI/select/Selector";
import Loader from "../../UI/Loader/Loader";

const perPage = 12;

const Photos = () => {
  
  const { category } = useParams<{ category: string }>();
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [page] = useState(1);   
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [sort, setSort] = useState<string>("sortOptions[0].value");
  const [loading, setLoading] = useState(false);

  const isSearch = Boolean(category);
  const sortOptions = isSearch ? searchSortOptions : mainSortOptions;

  useEffect(() => {
    setLoading(true);
    if (category) {
      fetchPhotosByCategory(category, page, perPage, sort.toLowerCase())
        .then(data => {
          setPhotos(data);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    } else {
      const allowedSort = ["latest", "popular"];
      const sortValue = allowedSort.includes(sort.toLowerCase()) ? sort.toLowerCase() : "latest";
      fetchPhotos(page, perPage, sortValue)
        .then(data => {
          setPhotos(data);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [category, page, sort]);


  const openModal = (idx: number) => setModalIndex(idx);
  const closeModal = () => setModalIndex(null);
  const handlePrev = () => {
    if (modalIndex !== null) setModalIndex((modalIndex - 1 + photos.length) % photos.length);
  };
  const handleNext = () => {
    if (modalIndex !== null) setModalIndex((modalIndex + 1) % photos.length);
  };

  return (
    <section className={styles.photosSection}>
      <Selector
        options={sortOptions}
        defaultValue={sortOptions[0].name}
        onSortChange={setSort}
      />
      {loading ? (
        <Loader />
      ) : photos.length !== 0 ? (
        <>
          <div className={styles.themeGrid}>
            {photos.map((photo, idx) => (
              <PhotoCard
                key={photo.id}
                title={photo.alt_description}
                url={photo.urls.small}
                onClick={() => openModal(idx)}
              />
            ))}
          </div>
        </>
      ) : (
        <>
        <div className={styles.noPhotoTitle}>
          The search didn't yield any results, please try <span className={styles.noPhotoTitleSpan}>again.</span>
        </div>
  
      </>
      )}
      {modalIndex !== null && (
        <PhotoModal
          photos={photos.map(photo => ({
            url: photo.urls.small,
            title: photo.alt_description,
          }))}
          currentIndex={modalIndex}
          onClose={closeModal}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
};

export default Photos;