import React from "react";
import styles from "./Footer.module.scss";
import whatsappIcon from "../../assets/whatsapp.png";
import instagramIcon from "../../assets/instagram.png";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.block}>
        <h4>Sainath Mobile Store</h4>
        <p>5.0 (2 Google reviews)</p>
        <p>Cell phone store</p>
        <p>Opposite of Nalgonda x road, Varkatpally, Narketpalle, Telangana 508254</p>
        <p>Phone: 0950*********</p>
        <p>Open ⋅ Closes 9 pm</p>
      </div>
      <div className={styles.block}>
        <h4>Services</h4>
        <p>Latest smartphones and feature phones from top brands at competitive prices.</p>
        <p>Expert repair services for all mobile models.</p>
        <p>Instant recharge services for prepaid mobile plans.</p>
        <p>Mobile accessories including cases, headphones, chargers, and more.</p>
      </div>
      <div className={styles.block}>
        <h4>Experience</h4>
        <p>Friendly and knowledgeable staff</p>
        <p>Quick and efficient service</p>
        <p>Genuine products and accessories</p>
        <p>Competitive prices</p>
      </div>
      <div className={styles.blockSocial}>
        <h4>Connect with us</h4>
        <div>
          <a href="https://wa.me/PHONE_NUMBER" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="https://instagram.com/your_instagram_profile" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
    <div className={styles.copyRight}>
      &copy; {new Date().getFullYear()} Sainath Mobile Store. All rights reserved.
    </div>
  </footer>
);

export default Footer;
