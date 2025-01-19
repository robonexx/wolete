'use client';
import styles from './AboutHero.module.scss';
import React from 'react';

const AboutHero = () => {
  return (
    <div className={styles.abouthero}>
      <div className={styles.name}>
        {' '}
        Rebecca / Wolete<sup>&#174;</sup>
      </div>
      <div className={styles.credit}>
        <a href='https://www.instagram.com/wooolete/' className={styles.insta}>
          @wooolete
        </a>
      </div>
      <div className={styles.header}>
        <div className={styles.title}>
          <span className={styles.slant}>Rooted</span> in the <br />
          vibrant traditions{' '}
          <span className={styles.slant}>of Afrocentric culture</span>
        </div>
        <a href='https://www.instagram.com/wooolete/' className={styles.btn}>
          Connect on insta
        </a>
        <img src='/images/IMAGE1.JPG' alt='' className={styles.image} />
      </div>
    </div>
  );
};

export default AboutHero;
