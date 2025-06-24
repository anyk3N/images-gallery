import { useEffect, useState } from "react";
import PhotoCard from "../../UI/PhotoCard/PhotoCard";
import styles from "../Photos/Photos.module.css";
import type { UnsplashPhoto } from "../../../types/types"
import { useParams } from "react-router-dom";
import { fetchPhotos, fetchPhotosByCategory } from "../../../utils/fetcher"
import PhotoModal from "../PhotoModal/PhotoModal";

const Photos = () => {
  const { category } = useParams<{ category: string }>();
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [page] = useState(1);
  const [modalIndex, setModalIndex] = useState<number | null>(null);


  useEffect(() => {
    if (category) {
      fetchPhotosByCategory(category, page)
      .then(setPhotos)
      .catch(console.error);
  } else {
      fetchPhotos()
      .then(setPhotos)
      .catch(console.error);
  }
  }, [category, page]);


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
      {photos.length !== 0 ? (
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
      ) : (
        <div className={styles.noPhotoTitle}>
          The search didn't yield any results, please try <span className={styles.noPhotoTitleSpan}>again.</span>
        </div>
      )}
      {modalIndex !== null && (
        <PhotoModal
          photos={photos.map(p => ({
            url: p.urls.small,
            title: p.alt_description,
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