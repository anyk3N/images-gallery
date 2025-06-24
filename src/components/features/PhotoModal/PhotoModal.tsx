import React, { useEffect, useState } from "react";
import styles from "./PhotoModal.module.css";
import type { PhotoModalProps } from "../../../types/types";
import leftArrow from "../../../assets/icons/left arrow.svg"; 
import rightArrow from "../../../assets/icons/right arrow.svg";
import fav from "../../../assets/icons/features or.svg"
import favActive from "../../../assets/icons/features or full.svg"

const PhotoModal: React.FC<PhotoModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const photo = photos[currentIndex];

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

  const [isFav, setIsFav] = useState(false);

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
              onClick={() => setIsFav((prev) => !prev)}
            />
          </div>}
      </div>
    </div>
  );
};

export default PhotoModal;