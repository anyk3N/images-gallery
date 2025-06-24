import styles from "../Footer/Footer.module.css";
import twitter from "../../../assets/icons/1.svg"
import facebook from "../../../assets/icons/2.svg";
import instagram from "../../../assets/icons/3.svg";
import git from "../../../assets/icons/4.svg";
import modsen from "../../../assets/icons/modsen.svg";

const socialLinks = [
  { href: "#", icon: twitter, alt: "Twitter" },
  { href: "#", icon: facebook, alt: "Facebook" },
  { href: "#", icon: instagram, alt: "Instagram" },
  { href: "#", icon: git, alt: "GitHub" },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/" },
      { name: "Features", href: "/" },
      { name: "Works", href: "/" },
      { name: "Career", href: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Customer Support", href: "/" },
      { name: "Delivery Details", href: "/" },
      { name: "Terms & Conditions", href: "/" },
      { name: "Privacy Policy", href: "/" },
    ],
  },
  {
    title: "FAQ",
    links: [
      { name: "Account", href: "/" },
      { name: "Manage Deliveries", href: "/" },
      { name: "Orders", href: "/" },
      { name: "Payments", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Free eBooks", href: "/" },
      { name: "Development Tutorial", href: "/" },
      { name: "How to - Blog", href: "/" },
      { name: "Youtube Playlist", href: "/" },
    ],
  },
];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.footerBrand}>
        <a href="/">
          <img src={modsen} alt="Логотип" className={styles.footerLogo} />
        </a>
        <p className={styles.footerText}>
          We have images that capture every<br /> mood and inspire every vision. From breathtaking landscapes to vibrant portraits.
        </p>
        <div className={styles.socialIcons}>
          {socialLinks.map((item) => (
            <a key={item.alt} href={item.href} target="_blank" rel="noopener noreferrer">
              <img src={item.icon} alt={item.alt} />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.footerLinks}>
        {footerLinks.map((column) => (
          <div className={styles.linkColumn} key={column.title}>
            <h3 className={styles.linkTitle}>{column.title}</h3>
            <ul className={styles.linkList}>
              {column.links.map((link) => (
                <li className={styles.linkItem} key={link.name}>
                  <a className={styles.link} href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <p className={styles.copyright}>
      Modsen.gallery © 2000-2025, All Rights Reserved
    </p>
  </footer>
);

export default Footer;