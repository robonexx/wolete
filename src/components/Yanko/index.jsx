'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

import styles from './Yanko.module.scss';

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
      <div>
        <p className={styles.text}>
          <br />
          is a platform focusing on <span>
            African dances and cultures
          </span>{' '}
          <br />
          <br />
          <span>Our mission</span>, <br />
          <br />
          is to <span>educate people</span> on African dances and cultures and
          empower artists from the
          <span>African continent and diaspora.</span>. <br />
          The aim is to provide artists with African heritage a platform to
          share their art and create a safe space for cultural exchange. <br />
          <span>Check out Y3NKO PROJECT</span> on instagram by clicking the
          button below. <br />
        </p>
        <img
          src='/images/partners/Y3nko.png'
          alt='Y3NKO'
          className={styles.image}
        />
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
