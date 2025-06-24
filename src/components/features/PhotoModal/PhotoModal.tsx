import React, { useEffect, useState } from "react";
import styles from "./PhotoModal.module.css";
import type { PhotoModalProps } from "../../../types/types";
import leftArrow from "../../../assets/icons/left arrow.svg"; 
import rightArrow from "../../../assets/icons/right arrow.svg";
import fav from "../../../assets/icons/features or.svg"
import favActive from "../../../assets/icons/features or full.svg"

const FAV_KEY = "favouritePhotos";

function getFavourites() {
  try {
    return JSON.parse(sessionStorage.getItem(FAV_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveFavourites(favs: any[]) {
  sessionStorage.setItem(FAV_KEY, JSON.stringify(favs));
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const photo = photos[currentIndex];

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = getFavourites();
    setIsFav(favs.some((p: any) => p.url === photo.url));
  }, [photo.url]);

  const handleFavClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const favs = getFavourites();
    if (isFav) {
      const updated = favs.filter((p: any) => p.url !== photo.url);
      saveFavourites(updated);
      setIsFav(false);
    } else {
      const updated = [...favs, { url: photo.url, title: photo.title }];
      saveFavourites(updated);
      setIsFav(true);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        <button className={styles.arrowLeft} onClick={onPrev}>
          <img src={leftArrow} alt="prev"></img>
        </button>
        <img className={styles.image} src={photo.url} alt={photo.title} />
        <button className={styles.arrowRight} onClick={onNext}>
          <img src={rightArrow} alt="Next" />
        </button>
        {photo.title && 
          <div className={styles.title}>
            {photo.title}
            <img 
              className={styles.favIcon} 
              src={isFav ? favActive : fav} 
              alt="Favourite"
              onClick={handleFavClick}
            />
          </div>}
      </div>
    </div>
  );
};

export default PhotoModal;