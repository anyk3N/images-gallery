import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import SearchBar from "../../components/useless/SearchBar";
import Photos from "../../components/features/Photos/Photos";


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