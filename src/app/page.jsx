'use client';
import { useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import Hero from '@/components/Hero';
import styles from './page.module.css';
import HomeSectionOne from '@/components/HomeSectionOne';
import VideoWrapper from '@/components/VideoWrapper';
import HomeSectionThree from '@/components/HomeSectionThree';
import SliderSection from '@/components/SliderSection';

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <ReactLenis root>
      <div className={styles.page}>
        <Hero />
        <HomeSectionOne />
        <VideoWrapper />
        <HomeSectionThree />
        <SliderSection />
      </div>
    </ReactLenis>
  );
}
