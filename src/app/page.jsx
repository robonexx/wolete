import Hero from '@/components/Hero';
import styles from './page.module.css';
import HomeSectionOne from '@/components/HomeSectionOne';
import VideoWrapper from '@/components/VideoWrapper';
import HomeSectionThree from '@/components/HomeSectionThree';
import SliderSection from '@/components/SliderSection';

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <HomeSectionOne />
      <VideoWrapper />
      <HomeSectionThree />
      <SliderSection />
    </div>
  );
}
