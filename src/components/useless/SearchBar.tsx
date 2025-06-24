import styles from "./searchBar.module.css"
import loupe from "../../assets/icons/lypa.svg"
// import Search from "../features/Search/Search";

const SearchBar = () => {
    return (
        <section className={styles.titleSec}>
            <div className="container">
                <h2 className={styles.titleText2}>
                    let's find some 
                    <span className={styles.spanText}> Images</span>
                    <br />Here!
                </h2>
            </div>
            <form className={styles.searchBar}>
                <button className={styles.searchBtn} onClick={(e) => e.preventDefault()} type="submit">
                    <img src={loupe} alt="search"/>
                </button>
                <input className={styles.searchInput} type="text" placeholder="Search..." />
            </form>
        </section>
      );
}
 
export default SearchBar;