import type { CardProps } from "../../../types/types";
import fav from "../../../assets/icons/features or.svg";
import favActive from "../../../assets/icons/features or full.svg"
import styles from "./PhotoCard.module.css"
import { useState } from "react";


const PhotoCard = ({url, title, onClick}: CardProps) => {
    const [isFav, setIsFav] = useState(false);

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
                        onClick={() => setIsFav(prev => !prev) }                        
                        />
                </a>
            </div>
        </div>
            
      );

}
 
export default PhotoCard;