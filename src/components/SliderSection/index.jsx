'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './SliderSection.module.scss';

const SliderSection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slides = sliderRef.current.children;
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;

    gsap.set(sliderRef.current, { width: totalSlides * slideWidth });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(sliderRef.current, {
      x: `-=${slideWidth * totalSlides}`,
      duration: 50,
      ease: 'linear',
    });
  }, []);

  return (
    <div className={styles.sliderSection}>
      <p className={styles.season}>Beyond the stage</p>
      <div className={styles.slideHead}>Community empowerment</div>
      <div className={styles.sliderWrapper}>
        <div className={styles.items} ref={sliderRef}>
          <div className={styles.entry}>
            <Image
              src='/images/image1.JPG'
              alt='Slide 1'
              width={500}
              height={400}
              className={styles.slide}
            />
          </div>
          <div className={styles.entry}>
            <Image
              src='/images/image2.JPG'
              alt='Slide 2'
              width={500}
              height={400}
              className={styles.slide}
            />
          </div>
          <div className={styles.entry}>
            <Image
              src='/images/image3.JPG'
              alt='Slide 2'
              width={500}
              height={400}
              className={styles.slide}
            />
          </div>
          <div className={styles.entry}>
            <Image
              src='/images/image5.JPG'
              alt='Slide 2'
              width={500}
              height={400}
              className={styles.slide}
            />
          </div>
          {/* Duplicate slides for continuous effect */}
          <div className={styles.entry}>
            <Image
              src='/images/image1.JPG'
              alt='Slide 2'
              width={500}
              height={400}
              className={styles.slide}
            />
          </div>
          <div className={styles.entry}>
            <Image
              src='/images/image2.JPG'
              alt='Slide 2'
              width={500}
              height={400}
              className={styles.slide}
            />
          </div>
          <div className={styles.entry}>
            <Image
              src='/images/image3.JPG'
              alt='Slide 2'
              width={500}
              height={400}
              className={styles.slide}
            />
          </div>
          <div className={styles.entry}>
            <Image
              src='/images/image5.JPG'
              alt='Slide 2'
              width={500}
              height={400}
              className={styles.slide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
