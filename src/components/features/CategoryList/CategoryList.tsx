import styles from "./CategoryList.module.css"
import { useEffect, useState } from "react"
import CategoryCard from "components/UI/CategoryCard/CategoryCard"
import type { UnsplashPhoto } from "types/types"
import { fetchCollections } from 'api/ImageService.ts'
import Loader from "components/UI/Loader/Loader.tsx"
import { useFetching } from "hooks/useFetching.ts"

const CategoryList = () => {
  const [categories, setCategories] = useState<UnsplashPhoto[]>([])

  const [fetchCategories, isLoading, error] = useFetching(async () => {
    const posts = await fetchCollections()
    setCategories(posts)
  })

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <section className={styles.themeSection}>
      <div className={styles.themeGrid}>
        {error && <h1>Произошла ошибка {error}</h1>}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {categories.map((photo) => (
              <CategoryCard
                key={photo.id}
                category={photo.title}
                url={photo.cover_photo.urls.regular}
              />
            ))}
          </>
        )}
      </div>
    </section>
  )
}

export default CategoryList
