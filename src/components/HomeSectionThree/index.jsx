import React from 'react';
import styles from './HomeSectionThree.module.scss';

const HomeSectionThree = () => {
  return (
    <div className={styles.homeSectionThree}>
      <p className={styles.text}>
        Rooted in the <span>vibrant traditions</span>{' '}
        <img src='/images/image7.png' alt='' className={styles.highlight} /> of
        Afrocentric culture and driven by a deep{' '}
        <span>passion for community</span>, <br />
        <img
          src='/images/image8.jpeg'
          alt=''
          className={styles.highlighttwo}
        />{' '}
        <br />
        her journey is one of{' '}
        <span>connection, rhythm, and transformation</span>. <br />
        Rebecca’s dedication to her craft{' '}
        <img
          src='/images/image6.png'
          alt=''
          className={styles.highlightthree}
        />{' '}
        has led her to perform at renowned institutions like{' '}
        <span>Dramaten</span>, <br />
        live shows with artists both <span>nationally and internationally</span>
        ,
        <br /> experiences that have enriched her perspective and{' '}
        <span>expanded</span> her&nbsp;
        <span>creative horizons</span>.
      </p>
    </div>
  );
};

export default HomeSectionThree;
