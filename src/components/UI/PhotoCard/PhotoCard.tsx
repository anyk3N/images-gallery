import type { CardProps } from "../../../types/types";
import fav from "../../../assets/icons/features or.svg";
import favActive from "../../../assets/icons/features or full.svg"
import styles from "./PhotoCard.module.css"
import { useEffect, useState } from "react";

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

const PhotoCard = ({url, title, onClick}: CardProps) => {
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
      const favs = getFavourites();
      setIsFav(favs.some((p: any) => p.url === url));
    }, [url]);

    const handleFavClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      const favs = getFavourites();
      if (isFav) {
        const updated = favs.filter((p: any) => p.url !== url);
        saveFavourites(updated);
        setIsFav(false);
      } else {
        const updated = [...favs, { url, title }];
        saveFavourites(updated);
        setIsFav(true);
      }
    };

    return (
        <div className={styles.card} onClick={onClick} style={{ cursor: "pointer" }}>
            <div className={styles.cardImage}>
                <img src={url} alt="Пример изображения" className={styles.cardImg} />
            </div>
            <div className={styles.cardFooter}>
                <span className={styles.cardTitle}>{title}</span>
                <a className={styles.images} onClick={e => e.stopPropagation()}>
                    <img 
                        src={isFav ? favActive : fav} 
                        className={styles.cardIcon} 
                        alt="favourite" 
                        onClick={handleFavClick}
                    />
                </a>
            </div>
        </div>
      );
}

export default PhotoCard;