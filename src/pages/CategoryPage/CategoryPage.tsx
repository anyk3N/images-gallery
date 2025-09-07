import Footer from "../../components/layout/Footer/Footer"
import Header from "../../components/layout/Header/Header"
import TitleBlock from "../../components/layout/Title/TitleBlock"
import CategoryList from "components/features/CategoryList/CategoryList.tsx"

const CategoryPage = () => {
  return (
    <>
      <Header />
      <TitleBlock />
      <CategoryList />
      <Footer />
    </>
  )
}

export default CategoryPage
