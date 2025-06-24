import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import Photos from "../../components/features/Photos/Photos";
import SearchBar from "../../components/features/Search/SearchBar";

const ImagesPage: React.FC = () => {
    return (
        <>
            <Header/>
            <SearchBar/>
            <Photos/>
            <Footer/>
        </>
      );
}
 
export default ImagesPage;