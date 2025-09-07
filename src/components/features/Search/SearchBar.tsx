import { useState, useEffect } from "react"
import styles from "./SearchBar.module.css"
import loupe from "assets/icons/lypa.svg"

type SearchBarProps = {
  onSearch: (query: string) => void
}

const MIN_QUERY_LENGTH = 2

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [search, setSearch] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search.trim().length >= MIN_QUERY_LENGTH) {
        onSearch(search.trim())
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [search, onSearch])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    onSearch(search.trim())
  }

  return (
    <section className={styles.titleSec}>
      <div className="container">
        <h2 className={styles.titleText2}>
          let's find some
          <span className={styles.spanText}> Images</span>
          <br />
          Here!
        </h2>
      </div>

      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <button className={styles.searchBtn} type="submit">
          <img src={loupe} alt="search" />
        </button>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {error && <p className={styles.errorText}>{error}</p>}
    </section>
  )
}

export default SearchBar
