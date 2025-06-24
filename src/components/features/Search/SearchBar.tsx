import styles from "./searchBar.module.css";
import loupe from "../../../assets/icons/lypa.svg";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "../../../utils/debounce";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const debouncedNavigate = useRef(
    debounce((query: string) => {
      if (query.trim()) {
        navigate(`/images/${encodeURIComponent(query.trim())}`);
      }
    }, 400)
  ).current;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedNavigate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/images/${encodeURIComponent(search.trim())}`);
    }
  };

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
          onChange={handleChange}
        />
      </form>
    </section>
  );
};

export default SearchBar;