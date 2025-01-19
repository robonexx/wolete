import React from 'react';
import styles from './HomeSectionThree.module.scss';

const HomeSectionThree = () => {
  return (
    <div className={styles.homeSectionThree}>
      <p className={styles.text}>
        Rooted in the <span>vibrant traditions</span>{' '}
        <img src='/images/image6.png' alt='' className={styles.highlight} /> of
        Afrocentric culture and driven by a deep{' '}
        <span>passion for community</span>, <br />
        <img
          src='/images/image8.jpeg'
          alt=''
          className={styles.highlight}
        />{' '}
        <br />
        her journey is one of{' '}
        <span>connection, rhythm, and transformation</span>. <br />
        Rebecca’s dedication to her craft{' '}
        <img src='/images/image7.png' alt='' className={styles.highlight} /> has
        led her to perform at renowned institutions like Dramaten, <br />
        live shows with artists both nationally and internationally,
        <br /> experiences that have enriched her perspective and expanded her
        creative horizons.
      </p>
    </div>
  );
};

export default HomeSectionThree;
