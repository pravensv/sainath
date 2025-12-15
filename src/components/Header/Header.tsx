import React, { useState } from "react";
import styles from "./Header.module.scss";

type Page = "home" | "about" | "contact" | "faqs";

interface HeaderProps {
  onNavigate: (page: Page) => void;
  activePage: Page;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <span className={styles.logoIcon} >SN</span>
        <span className={styles.logoText}>
          SaiNath<span className={styles.logoBold}> Mobile Store</span>
        </span>
      </div>
      <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navMobileOpen : ""}`}>
        <ul>
          <li 
            className={activePage === "home" ? styles.active : ""}
            onClick={() => { onNavigate("home"); setMobileMenuOpen(false); }}>
            Home
          </li>
          <li
            className={activePage === "about" ? styles.active : ""}
            onClick={() => { onNavigate("about"); setMobileMenuOpen(false); }}>
            About
          </li>
          <li
            className={activePage === "contact" ? styles.active : ""}
            onClick={() => { onNavigate("contact"); setMobileMenuOpen(false); }}>
            Contact us
          </li>
          <li
            className={activePage === "faqs" ? styles.active : ""}
            onClick={() => { onNavigate("faqs"); setMobileMenuOpen(false); }}>
            FAQs
          </li>
        </ul>
        <button className={styles.bookRepair}>Book a Repair</button>
      </nav>
      <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};

export default Header;
