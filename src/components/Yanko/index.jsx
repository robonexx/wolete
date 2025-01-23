'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

import styles from './Yanko.module.scss';

const Yanko = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    tl.from(
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

  const buttonsRef = useRef(null);
  return (
    <div className={styles.yanko}>
      <h2 className={styles.wide}>Y3NKO Project</h2> <br />
      <p className={styles.text}>
        <img
          src='/images/partners/y3nko.png'
          alt=''
          className={styles.highlighttwo}
        />{' '}
        <br />
        is a platform focusing on African dances and cultures{' '}
        <span>Our mission</span>, <br />
        <br />
        is to educate people on African dances and cultures and empower artists
        from the
        <span>African continent and diaspora.</span>. <br />
        The aim is to provide artists with African heritage a platform to share
        their art and create a safe space for cultural exchange. <br />
        <span>Check out Y3NKO PROJECT</span> on instagram by clicking the button
        below. <br />
      </p>
      <div ref={buttonsRef} className={styles.buttons}>
        <button className={styles.btnPrimary}>
          {' '}
          <a
            href='https://www.instagram.com/y3nkoproject?igsh=dHBsczMyaDB5b3lt'
            target='_blank'
            rel='noopener noreferrer'
          >
            Check Y3NKO on Instagram
          </a>
        </button>
      </div>
    </div>
  );
};

export default Yanko;
