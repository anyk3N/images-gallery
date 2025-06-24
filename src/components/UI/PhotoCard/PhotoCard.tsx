import type { CardProps } from "../../../types/types";
import fav from "../../../assets/icons/features or.svg";
import styles from "./PhotoCard.module.css"


const PhotoCard = ({url, title, onClick}: CardProps) => {
    return (

        <div className={styles.card} onClick={onClick} style={{ cursor: "pointer" }}>
            <div className={styles.cardImage}>
                <img src={url} alt="Пример изображения" className={styles.cardImg} />
            </div>
            <div className={styles.cardFooter}>
                <span className={styles.cardTitle}>{title}</span>
                <a className={styles.images} onClick={e => e.stopPropagation()}>
                    <img src={fav} className={styles.cardIcon} alt="favourite" />
                </a>
            </div>
        </div>
            
      );

}
 
export default PhotoCard;