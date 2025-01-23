'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './SliderSection.module.scss';

const SliderSection = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const slides = slider.children;
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;

    // Set the total width of the slider for continuous scrolling
    gsap.set(slider, { width: totalSlides * slideWidth });

    // Create the infinite scrolling animation
    animationRef.current = gsap.to(slider, {
      x: `-=${(slideWidth * totalSlides) / 2}`, // Scroll half the total duplicated width
      duration: 60, // Adjust the speed of the scrolling
      ease: 'linear',
      repeat: -1, // Infinite loop
    });

    return () => {
      animationRef.current?.kill(); // Clean up the animation on unmount
    };
  }, []);

  const handleMouseEnter = () => {
    animationRef.current?.pause(); // Pause animation on hover
  };

  const handleMouseLeave = () => {
    animationRef.current?.play(); // Resume animation when hover ends
  };

  return (
    <div className={styles.sliderSection}>
      <p className={styles.season}>Beyond the stage</p>
      <div className={styles.slideHead}>Community empowerment</div>
      <div
        className={styles.sliderWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.items} ref={sliderRef}>
          {Array(2)
            .fill([
              '/images/image1.JPG',
              '/images/image2.JPG',
              '/images/image3.JPG',
              '/images/image5.JPG',
            ])
            .flat()
            .map((src, index) => (
              <div key={index} className={styles.entry}>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={500}
                  height={400}
                  className={styles.slide}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
