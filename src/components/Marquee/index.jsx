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
    const totalWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });
  }, []);

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee} ref={marqueeRef}>
        {[...images, ...images].map((image, index) => (
          <div key={index} className={styles.marqueeImageWrapper}>
            <Image
              src={`${folderPath}/${image}`}
              alt={image.replace('.png', '')}
              width={120}
              height={100}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
