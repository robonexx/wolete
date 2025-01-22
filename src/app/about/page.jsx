import AboutHero from '@/components/AboutHero';
import styles from './page.module.scss';
import AboutSection from '@/components/AboutSection';
import AboutResume from '@/components/AboutResume';
import AboutVideo from '@/components/AboutVideo/page';

export default function About() {
  return (
    <div className={styles.page}>
      <AboutHero />
      <AboutSection />
      <AboutVideo />
      <AboutResume />
      {/*  <h4>Logo test</h4>
      <img
        src='/images/logowoletebig.png'
        alt='Image 1'
        className={styles.logoimage}
      /> */}
    </div>
  );
}
