'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.scss';
import ParagraphWord from '@/components/TextRevealOnScroll/ParagraphWord';
import { gsap } from 'gsap';

const paragraph =
  '#Blackout# #Family# is a Swedish dance group specializing in #dancehall# and #Afro# #Fusion# . They offer #classes# and #workshops# for all ages, including kids as young as 3 years old and adults of all skill levels. Their adult classes dives into everything from #Dancehall# and #Female# #Dancehall# to different Afro Styles like #Amapiano# and #Ndombolo# , focusing on creativity and confidence. ';
const paragraph2 =
  'The group is known for #vibrant# performances at events like Urban Connection, aiming to #showcase# #dancehall# #culture# . Key member #Binta# #Blackout# leads workshops and has been featured in events like Streetstar Dance School Challenge.';
const paragraph3 =
  'You can connect with #Blackout# on #Instagram# by following the link below';

export default function Blackout() {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div className={styles.page}>
      <img
        ref={imageRef}
        src='/images/partners/blackout.png'
        alt=''
        className={styles.imageTop}
      />
      <div className={styles.blackoutHero}>
        <div className={styles.credit}>
          <a
            href='https://www.instagram.com/blackoutfamily/'
            className={styles.insta}
          >
            @blackoutfamily<sup>&#174;</sup>
          </a>
        </div>
        <div className={styles.header}>
          <a
            href='https://www.svenskalag.se/blackoutfamilyab/sida/103742/borja-i-kidsgrupp?fbclid=PAZXh0bgNhZW0CMTEAAaYNpNc8JcSNxfQTyfL7C96mHFPbFO6CmmGOkNY1f5EqNz4gDnb0aBv5UxY_aem_IbCpdL0OUjdzYUG1824Olw'
            className={styles.btn}
          >
            Our Classes
          </a>
          <img src='/images/Blackout25.jpg' alt='' className={styles.image} />
        </div>
      </div>
      <ParagraphWord paragraph={paragraph} />
      <div style={{ height: '5vh' }}></div>
      <ParagraphWord paragraph={paragraph2} />
      <div style={{ height: '5vh' }}></div>
      <ParagraphWord paragraph={paragraph3} />
      <div style={{ height: '5vh' }}></div>
      <div className={styles.buttons}>
        <button className={styles.btnPrimary}>
          {' '}
          <a
            href='https://www.instagram.com/blackoutfamily/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Connect on Instagram
          </a>
        </button>
      </div>
    </div>
  );
}
