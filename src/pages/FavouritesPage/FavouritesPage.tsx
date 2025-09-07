import Footer from "../../components/layout/Footer/Footer"
import Header from "../../components/layout/Header/Header"
import FavouriteList from "components/features/FavouriteList/FavouriteList.tsx"

const FavouritesPage: React.FC = () => {
  return (
    <>
      <Header />
      <FavouriteList />
      <Footer />
    </>
  )
}

export default FavouritesPage
