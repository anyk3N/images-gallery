import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import Favourite from "../../components/features/Favourite/Favourite";


const FavouritesPage: React.FC = () => {
    return (
        <>
            <Header/>
            <Favourite/>
            <Footer/>
        </>
      );
}
 
export default FavouritesPage;