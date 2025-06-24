import styles from "./Category.module.css";
import { useEffect, useState } from "react";
import type { UnsplashPhoto } from "../../../types/types";
import { fetchCollections } from "../../../utils/fetcher";
import CategoryCard from "../../UI/CategoryCard/CategoryCard";

const Category = () => {
    const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);

    useEffect(() => {
        fetchCollections()
          .then(setPhotos)
          .catch(console.error);
    }, []);

    return (
        <section className={styles.themeSection}>
            <div className={styles.themeGrid}>
                {photos.map((photo) => (
                <CategoryCard
                key={photo.id}
                category={photo.title} 
                url={photo.cover_photo.urls.small}
                />
                ))}
            </div>
        </section>
  );
};

export default Category;

    
 
