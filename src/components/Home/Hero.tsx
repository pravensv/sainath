import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import heroImg from '../../assets/heropng.png';


interface HeroItem {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    image: string;
}

interface HeroProps {
    data: { hero: HeroItem[] };
    images: { [key: string]: string };
}

const AUTO_SLIDE_INTERVAL = 3000; // milliseconds

const Hero: React.FC<HeroProps> = ({ data, images }) => {
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx(prev =>
                prev === data.hero.length - 1 ? 0 : prev + 1
            );
        }, AUTO_SLIDE_INTERVAL);
        return () => clearInterval(timer);
    }, [data.hero.length]);

    const heroItem = data.hero[currentIdx];

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>{heroItem.title}</h1>
                    <p>{heroItem.subtitle}</p>
                    <div className={styles.buttons}>
                        <button className={styles.primary}>{heroItem.cta1}</button>
                        <button className={styles.secondary}>{heroItem.cta2}</button>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <img src={images[heroItem.image] || heroImg} alt={heroItem.title} />
                </div>
            </section>
            <div className={styles.carouselNav}>
                {data.hero.map((_, idx) => (
                    <span
                        key={idx}
                        className={
                            idx === currentIdx
                                ? styles.carouselDotActive
                                : styles.carouselDot
                        }
                    >
                        ●
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Hero;
