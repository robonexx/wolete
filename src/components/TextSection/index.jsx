'use client';
import { gsap } from 'gsap';
import styles from './TextSection.module.scss';

const TextSection = () => {
  return (
    <div className={styles.textSection}>
      <p className={styles.text}>
        Partners, Collabs, <span>Clients</span>
      </p>
    </div>
  );
};

export default TextSection;
