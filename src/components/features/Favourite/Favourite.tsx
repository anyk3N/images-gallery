import styles from "./Favourite.module.css";

const Favourite = () => {
    return (
        <section className={styles.favouriteSection}>
            <div className={styles.favouriteTitle}>
                <p className={styles.favouriteTitleText}>
                    Saved by you.
                </p>
                <h2 className={styles.favouriteTitleH2}>
                    Your favourite list
                </h2>   
            </div>
        </section>
      );
}
 
export default Favourite;