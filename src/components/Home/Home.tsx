import React from "react";
import styles from "./Home.module.scss";
import data from "../../data/homeData.json";
import iphoneImg from "../../assets/iphone.png";
import ipadImg from "../../assets/ipad.png";
import andiodImg from "../../assets/android.png";
import tabletImg from "../../assets/tablet.png";
import heroImg from "../../assets/heropng.png";
import Hero from "./Hero";

const images: { [key: string]: string } = {
  "/iphone.png": iphoneImg,
  "/ipad.png": ipadImg,
  "/android.png": andiodImg,
  "/tablet.png": tabletImg,
  "/hero-image.png": heroImg,
};

const iconMap: { [key: string]: React.ReactElement } = {
  wrench: <span className={styles.icon}>🛠️</span>,
  refresh: <span className={styles.icon}>🔄</span>,
  stethoscope: <span className={styles.icon}>🩺</span>
};

const Home: React.FC = () => (
  <div className={styles.container}>
    {/* Hero Section */}
    <Hero data={data} images={images} />

    {/* Feature Cards */}
    <section className={styles.features}>
      {data.features.map(feature => (
        <div key={feature.title} className={styles.featureCard}>
          {iconMap[feature.icon]}
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </section>

    {/* Device Types */}
    <h2 className={styles.sectionTitle}>All kind of repairs. For real.</h2>
    <section className={styles.repairs}>
      {data.repairTypes.map(repair => (
        <div className={styles.repairCard} key={repair.title}>
          <img
            src={images[repair.icon]}
            alt={repair.title}
            className={styles.deviceIcon}
          />
          <h4>{repair.title}</h4>
          <p>{repair.desc}</p>
        </div>
      ))}
    </section>
  </div>
);

export default Home;
