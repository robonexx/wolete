'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.scss';

const Hero = () => {
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const title2Ref = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.to(heroRef.current, {
      opacity: 1,
      duration: 0.6,
      height: 'calc(100svh - 160px)',
      ease: 'power3.out',
    });
    tl.from(overlayRef.current, {
      opacity: 0,
      duration: 0.8,
      height: 0,
      ease: 'power3.out',
    });
    tl.from(videoRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
    tl.from(title2Ref.current, {
      x: -200,
      opacity: 0,
      duration: 0.4,
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
          x: 200,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.4' // start slightly earlier
      )
      .from(
        buttonsRef.current.children,
        {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
        },
        '-=0.4'
      );
  }, []);

  return (
    <div className={styles.hero} ref={heroRef}>
      <div className={styles.overlay} ref={overlayRef}></div>
      <div className={styles.videoContainer} ref={videoRef}>
        <video
          width='100%'
          height='100%'
          loop
          autoPlay
          muted
          src='/videos/wolete.webm'
        />
      </div>

      <div className={styles.content}>
        <div className={styles.title}>
          <h2 ref={title2Ref}>Rebecca</h2>
          <h1 ref={titleRef} className={styles.title}>
            WOLETE
          </h1>
        </div>
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
