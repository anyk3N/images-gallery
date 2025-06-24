
import styles from "./TitleBlock.module.css"

const TitleBlock = () => {
    return (
        <section className={styles.titleSec}>
            <div className={styles.container}>
                <h2 className={styles.titleText}>let's find some<br/>
                <span className={styles.spanText}>Images</span> here!</h2>
            </div>
        </section>
    );
}
 
export default TitleBlock;