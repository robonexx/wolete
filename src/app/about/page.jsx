import AboutHero from '@/components/AboutHero';
import styles from './page.module.scss';
import AboutSection from '@/components/AboutSection';
import AboutResume from '@/components/AboutResume';
import AboutVideo from '@/components/AboutVideo/page';
import PageTransition from '@/components/PageTransition';

export default function About() {
  return (
    <div className={styles.page}>
      <PageTransition />
      <AboutHero />
      <AboutSection />
      <AboutVideo />
      <h2>Resume:</h2>
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
