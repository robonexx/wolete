import Image from 'next/image';
import styles from './page.module.css';
import Hero from '@/components/hero';
import { Jaini_Purva } from 'next/font/google';
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
