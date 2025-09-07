import styles from "./CategoryCard.module.css"
import type { CardProps } from "types/types"
import { useNavigate } from "react-router-dom"
import defaultImage from "assets/icons/defaultImage.svg"

const CategoryCard = ({ url, category }: CardProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/images/${category}`)
  }

  return (
    <a href="#" className={styles.themeCard} onClick={handleClick}>
      <img src={url || defaultImage} alt={category} />
      <span className={styles.themeLabel}>{category}</span>
    </a>
  )
}

export default CategoryCard
