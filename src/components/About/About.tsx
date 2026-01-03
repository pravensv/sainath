import React from "react";
import styles from "./About.module.scss";
import whatsappIcon from "../../assets/whatsapp.png";
import instagramIcon from "../../assets/instagram.png";

const aboutData = {
  name: "Sainath Mobile Store",
  rating: "5.0 ",
  type: "Cell phone store",
  location: "Narketpally, Telangana",
  address: "Opposite of Nalgonda x road, Varkatpally, Narketpalle, Telangana 508254",
  phone: "0950*********",
  hours: "Open ⋅ Closes 9 pm",
  services: [
    "Sales: Latest smartphones and feature phones from top brands at competitive prices.",
    "Repair: Expert repair services for all mobile models, including screen replacements, battery repairs, and more.",
    "Recharges: Instant recharge services for all prepaid mobile plans.",
    "Accessories: Wide range of mobile accessories, including cases, headphones, chargers, and more."
  ],
  experience: [
    "Friendly and knowledgeable staff",
    "Quick and efficient service",
    "Genuine products and accessories",
    "Competitive prices"
  ],
  social: {
    whatsapp: "https://wa.me/PHONE_NUMBER", // replace with actual number
    instagram: "https://instagram.com/your_instagram_profile"
  }
};

const About: React.FC = () => (
  <div className={styles.container}>
    <h2>About {aboutData.name}</h2>
    <div className={styles.gridContainer}>
      {/* Left: Text Info */}
      <div className={styles.infoContainer}>
        <p><strong>Type:</strong> {aboutData.type}</p>
        <p><strong>Location:</strong> {aboutData.location}</p>
        <p><strong>Address:</strong> {aboutData.address}</p>
        <p><strong>Phone:</strong> {aboutData.phone}</p>
        <p><strong>Rating:</strong> {aboutData.rating}</p>
        <p><strong>Hours:</strong> {aboutData.hours}</p>

        <h3>Services</h3>
        <ul>
          {aboutData.services.map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>

        <h3>Experience</h3>
        <ul>
          {aboutData.experience.map((exp, idx) => (
            <li key={idx}>{exp}</li>
          ))}
        </ul>
      </div>

      {/* Right: Map and social icons grid */}
      <div>
        <div className={styles.mapContainer}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.20608507463163!2d79.19642915341542!3d17.204357955300846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb3b417005d16b%3A0x3816f56617e43427!2sSainath%20mobile%20store!5e0!3m2!1sen!2sin!4v1758947434468!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className={styles.socialIcons}>
          <a href={aboutData.social.whatsapp} target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" className={styles.socialIcon} />
          </a>
          <a href={aboutData.social.instagram} target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
