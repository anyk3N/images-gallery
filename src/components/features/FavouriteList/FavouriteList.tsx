import styles from "./FavouriteList.module.css"
import { useEffect, useState } from "react"
import ImageCard from "components/UI/ImageCard/ImageCard.tsx"

const FAV_KEY = "favouritePhotos"

const FavouriteList = () => {
  const [favs, setFavs] = useState<{ url: string; title?: string }[]>([])

  useEffect(() => {
    const stored = sessionStorage.getItem(FAV_KEY)
    if (stored) setFavs(JSON.parse(stored))
  }, [])

  return (
    <section className={styles.favouriteSection}>
      {favs.length === 0 ? (
        <div className={styles.countainer}>
          <h2 className={styles.favouriteTitleH2}>
            Your <span className={styles.favouriteTitleSpan}>favourite </span>
            list <br />
            is empty
          </h2>
        </div>
      ) : (
        <>
          <div className={styles.favouriteTitle}>
            <p className={styles.favouriteTitleText}>Saved by you.</p>
            <h2 className={styles.favouriteTitleH2}>Your favourite list</h2>
          </div>
          <div className={styles.themeGrid}>
            {favs.map((photo, idx) => (
              <ImageCard
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
  )
}

export default FavouriteList
