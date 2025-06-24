import styles from "./Favourite.module.css";
import { useEffect, useState } from "react";
import PhotoCard from "../../UI/PhotoCard/PhotoCard";

const FAV_KEY = "favouritePhotos";

const Favourite = () => {
    const [favs, setFavs] = useState<{ url: string; title?: string }[]>([]);

    useEffect(() => {
        const stored = sessionStorage.getItem(FAV_KEY);
        if (stored) setFavs(JSON.parse(stored));
    }, []);

    return (
        <section className={styles.favouriteSection}>
                {favs.length === 0 ? (
                    <div className={styles.countainer}>
                        <h2 className={styles.favouriteTitleH2}>
                            Your <span className={styles.favouriteTitleSpan}>favourite </span>list <br/>is empty
                        </h2>
                    </div>
                ) : (
                    <>
                        <div className={styles.favouriteTitle}>
                            <p className={styles.favouriteTitleText}>
                                Saved by you.
                            </p>
                            <h2 className={styles.favouriteTitleH2}>
                                Your favourite list
                            </h2>   
                        </div>
                        <div className={styles.themeGrid}>
                            {favs.map((photo, idx) => (
                                <PhotoCard
                                    key={photo.url + idx}
                                    url={photo.url}
                                    title={photo.title}
                                    onClick={() => {}} 
                                /> 
                            ))}
                        </div>
                    </>
                )}
        </section>
      );
}
 
export default Favourite;