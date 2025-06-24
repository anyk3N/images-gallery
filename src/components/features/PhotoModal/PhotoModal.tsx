import React, { useEffect } from "react";
import styles from "./PhotoModal.module.css";

interface PhotoModalProps {
  photos: { url: string; title?: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
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

  const photo = photos[currentIndex];

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        <button className={styles.arrowLeft} onClick={onPrev}>&#8592;</button>
        <img className={styles.image} src={photo.url} alt={photo.title} />
        <button className={styles.arrowRight} onClick={onNext}>&#8594;</button>
        {photo.title && <div className={styles.title}>{photo.title}</div>}
      </div>
    </div>
  );
};

export default PhotoModal;