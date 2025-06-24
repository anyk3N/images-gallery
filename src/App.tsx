import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage/CategoryPage"
import ImagesPage from "./pages/ImagePage/ImagesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CategoryPage/>}/>
          <Route path="/images" element={<ImagesPage/>}/>
          <Route path="/images/:category" element={<ImagesPage/>} />
          <Route path="/favourites" element={<FavouritesPage/>} />
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    );
}
 


export default App;
