import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import styles from "./NotFountPage.module.css"

const NotFoundPage = () => {
    return (
        <>
            <Header/>
            <div className={styles.notFoundSec}>
                <h1 className={styles.title}>404</h1>
                <h2 className={styles.title2}>NOT FOUND</h2>
                <p className={styles.text}>
                    The page was <span className={styles.textSpan}>not found</span>, please return to the main page.
                </p>
            </div>  
            <Footer/>
        </>
      );
}
 
export default NotFoundPage;