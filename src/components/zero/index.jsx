'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.scss';

const Hero = () => {
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 });
    tl.from(videoRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
      .from(
        subtitleRef.current,
        {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.4' // start slightly earlier
      )
      .from(
        buttonsRef.current.children,
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
        },
        '-=0.4'
      );
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.videoContainer}>
        <video
          width='100%'
          height='100%'
          loop
          autoPlay
          muted
          src='/videos/test.mp4'
        />
      </div>

      <div className={styles.content}>
        <h1 ref={titleRef} className={styles.title}>
          WOOOLETE
        </h1>
        <p ref={subtitleRef} className={styles.subtitle}>
          Dance artist, Educator, Organizer and Cultural Ambassador
        </p>
        <div ref={buttonsRef} className={styles.buttons}>
          <button className={styles.btnPrimary}>Bookings</button>
          <button className={styles.btnSecondary}>About Me</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
