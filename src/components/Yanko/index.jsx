'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

import styles from './Yanko.module.scss';
import ParagraphWord from '../TextRevealOnScroll/ParagraphWord';

const paragraph =
  'is a platform focusing on #African# dances and cultures #Our# #mission# ';
const paragraph2 =
  'is to #educate# people on #African# #dances# and #cultures# and empower artists from the African continent and diaspora. The aim is to provide artists with African heritage a platform to share their art and create a safe space for cultural exchange.';
const paragraph3 =
  '#Check# #out# #Y3NKO# #PROJECT# on instagram by clicking the button below. ';

const Yanko = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(`.${styles.image}`, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .to(
        `.${styles.text}`,
        { opacity: 1, y: 0, duration: 2, delay: 0.5, ease: 'power3.out' },
        '<'
      );
  }, []);

  return (
    <div className={styles.yanko}>
      <img
        src='/images/partners/Y3nko.png'
        alt='Y3NKO'
        className={styles.image}
      />
      <div>
        <ParagraphWord paragraph={paragraph} />
        <div style={{ height: '5vh' }}></div>
        <ParagraphWord paragraph={paragraph2} />
        <div style={{ height: '5vh' }}></div>
        <ParagraphWord paragraph={paragraph3} />
        <div style={{ height: '5vh' }}></div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.btnPrimary}>
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
