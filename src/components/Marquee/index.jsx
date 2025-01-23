// components/Marquee.js
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import styles from './Marquee.module.scss';

const Marquee = ({ images, folderPath = '/images/partners' }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const totalWidth = marquee.scrollWidth / 2; // Half of the duplicated width for seamless animation

    gsap.to(marquee, {
      x: -totalWidth, // Scroll the entire width of the images
      duration: 20, // Adjust this value to control speed
      ease: 'none',
      repeat: -1, // Infinite animation
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`, // Seamless looping using modulus
      },
    });
  }, []);

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee} ref={marqueeRef}>
        {[...images, ...images].map(
          (
            image,
            index // Duplicate images for smooth looping
          ) => (
            <div key={index} className={styles.marqueeImageWrapper}>
              <Image
                src={`${folderPath}/${image}`}
                alt={image.replace('.png', '')}
                width={120} // Adjust image size
                height={120} // Adjust image size
                className={styles.image}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Marquee;
