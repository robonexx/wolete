import AboutHero from '@/components/AboutHero';
import styles from './page.module.scss';

export default function About() {
  return (
    <div className={styles.page}>
      <AboutHero />
      <h4>Logo test</h4>
      <img
        src='/images/logowoletebig.png'
        alt='Image 1'
        className={styles.logoimage}
      />
    </div>
  );
}
