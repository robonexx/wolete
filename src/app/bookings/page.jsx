'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.scss';
import ParagraphWord from '@/components/TextRevealOnScroll/ParagraphWord';
import { gsap } from 'gsap';
import { AnimatedText } from '@/components/AnimatedText';

const paragraph =
  '#Discover# the vibrant world of #African# #dance# with a focus on one or several styles like #Azonto# #Amapiano# #Ndombolo# #Afrohouse# I offer - #Foundation# & #techniques# - a delve into the rich history of each style, guidance through choreography and performance practices.';

export default function Bookings() {
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
      );
    }
    if (imageRef2.current) {
      gsap.fromTo(
        imageRef2.current,
        { scale: 5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div className={styles.page}>
      <AnimatedText text='Workshops &' el='span' />
      <AnimatedText text='Bookings' el='span' />
      <div style={{ height: '10vh' }}></div>
      <ParagraphWord paragraph={paragraph} />
      <div style={{ height: '5vh' }}></div>
      <div className={styles.bookingHero}>
        <div className={styles.imageWrapper}>
          <img
            src='/images/weekly.png'
            alt='Weekly'
            ref={imageRef}
            className={styles.image}
          />
        </div>
        <div className={styles.imageWrapper}>
          <img
            src='/images/book.png'
            alt='Book'
            ref={imageRef2}
            className={styles.image}
          />
        </div>
      </div>
      <div style={{ height: '10vh' }}></div>
      <div className={styles.buttons}>
        <button className={styles.btnPrimary}>
          {' '}
          <a href='/contact' target='_blank' rel='noopener noreferrer'>
            Contact & Bookings
          </a>
        </button>
      </div>
    </div>
  );
}
