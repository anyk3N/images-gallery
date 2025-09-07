import styles from "./Header.module.css";
import PhotoGalleryLogo from "assets/icons/PhotoGalleryLogo.svg"
import images from "../../../assets/icons/images wh.svg";
import imagesActive from "../../../assets/icons/images or.svg"
import category from "../../../assets/icons/category wh.svg";
import categoryActive from "../../../assets/icons/category ora.svg";
import favourites from "../../../assets/icons/features wh.svg";
import favouritesActive from "../../../assets/icons/features or.svg";
import NavButton from "components/UI/navButton/NavButton";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", icon: category, iconActive: categoryActive, title: "Category" },
  { to: "/images", icon: images, iconActive: imagesActive, title: "Images" },
  { to: "/favourites", icon: favourites, iconActive: favouritesActive, title: "Favourites" },
];

const Header = () => (
  <header className={styles.headerSection}>
    <a href="/">
      <img 
        className={styles.PhotoGalleryLogo}
        src={PhotoGalleryLogo}
        alt="Photo Gallery"
      />
    </a>
    <nav className={styles.navBar}>
      {navLinks.map(({ to, icon, iconActive, title }) => (
        <NavLink 
          key={title} 
          className={styles.navLink} 
          to={to}
        >
          {({ isActive }) => (
            <NavButton 
              navUrl={isActive ? iconActive : icon}
              title={title} 
              isActive={isActive} 
            />
          )}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default Header;