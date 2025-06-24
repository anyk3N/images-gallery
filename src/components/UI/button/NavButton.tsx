import type { NavButtonProps } from "../../../types/types";
import styles from "./navBtn.module.css"


const NavButton = ({navUrl, title, isActive} : NavButtonProps) => {

    return (
        <button className={styles.navBtn}>
            <img src={navUrl}></img>
            <p className={`${styles.navLabel} ${isActive ? styles.active : ""}`}>
                {title}
            </p>
        </button>  
    );
}

// const NavButton = ({navUrl, title, isActive} : NavButtonProps) => {

//     return (
//         <button className={styles.navBtn}>
//             <img src={navUrl}></img>
//             <p className={`${styles.navLabel} ${isActive ? styles.active : ""}`}>
//                 {title}
//             </p>
//         </button>  
//     );
// }
 
export default NavButton;