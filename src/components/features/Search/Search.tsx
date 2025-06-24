import { useState, useEffect } from "react";
import styles from "./Search.module.css";
import type { UnsplashPhoto } from "../../../types/types";
import { fetchPhotos } from "../../../utils/fetcher";

const Search = () => {
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPhotos()
      .then(setPhotos)
      .finally(() => setLoading(false));
  }, []);

  const filteredPhotos = photos.filter(
    (photo) =>
      typeof photo.title === "string" &&
      photo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Поиск фотографий"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />
      {loading && <div>Загрузка...</div>}
      <div className={styles.photosGrid}>
        {filteredPhotos.map((photo) => (
          <img key={photo.id} src={photo.urls.small} alt={photo.title} className={styles.photoImg} />
        ))}
      </div>
    </div>
  );
};

export default Search;