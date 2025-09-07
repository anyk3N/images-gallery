import Footer from "../../components/layout/Footer/Footer"
import Header from "../../components/layout/Header/Header"
import ImagesList from "components/features/ImagesList/ImagesList.tsx"
import SearchBar from "../../components/features/Search/SearchBar"
import { useState } from "react"

const ImagesPage = () => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <Header />
      <SearchBar onSearch={setSearchQuery} />
      <ImagesList searchQuery={searchQuery} />
      <Footer />
    </>
  )
}

export default ImagesPage
