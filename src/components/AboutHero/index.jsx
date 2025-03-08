'use client';
import styles from './AboutHero.module.scss';
import React from 'react';

const AboutHero = () => {
  return (
    <div className={styles.abouthero}>
      <div className={styles.name}>
        {' '}
        <a href='https://www.instagram.com/wooolete/'>
        Rebecca / @Wolete<sup>&#174;</sup>
        </a>
       
      </div>
      <div className={styles.header}>
        <div className={styles.title}>
          <span className={styles.text}>Rooted</span> in the <br />
          vibrant traditions{' '}<br />
          <span className={styles.text}>of Afrocentric culture</span>
        </div>
        <a href='/about/#video' className={styles.btn}>
          Watch me move
        </a>
        <img src='/images/image1.JPG' alt='' className={styles.image} />
      </div>
    </div>
  );
};

export default AboutHero;
