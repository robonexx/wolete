'use client';
import { useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import Hero from '@/components/Hero';
import styles from './page.module.scss';
import HomeSectionOne from '@/components/HomeSectionOne';
import VideoWrapper from '@/components/VideoWrapper';
import HomeSectionThree from '@/components/HomeSectionThree';
import SliderSection from '@/components/SliderSection';
import Marquee from '@/components/Marquee';
import TextSection from '@/components/TextSection';

const sponsorImages = [
  'Blackout.png',
  'DOPEST.png',
  'Dramaten.png',
  'NBT.png',
  'Pride.png',
  'Sthlm Stad.png',
  'SVT.png',
  'UBUNTU.png',
  'Vi som alskar.png',
  'Apple.png',
  'Business&Dreams.png',
  'Circle K.png',
  'Glitter.png',
  'Mosquito.png',
  'Redbull.png',
  'Riksteatern.png',
  'Selam.png',
  'Y3nko.png',
  'cinema africa.png',
  'Kulturhuset stadsteatern.png',
];

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
        <TextSection />
        <Marquee images={sponsorImages} folderPath='/images/partners' />
        <SliderSection />
      </div>
    </ReactLenis>
  );
}
