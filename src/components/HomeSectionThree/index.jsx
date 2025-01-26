import React from 'react';
import styles from './HomeSectionThree.module.scss';

const HomeSectionThree = () => {
  return (
    <div className={styles.homeSectionThree}>
      <p className={styles.text}>
        Rooted{' '}
        <img src='/images/image7.png' alt='' className={styles.highlight} /> in
        the <span>vibrant traditions</span> of Afrocentric culture and driven by
        a deep <span>passion for community</span>
        <img
          src='/images/wolete.JPG'
          alt=''
          className={styles.highlighttwo}
        />{' '}
        her journey is one of{' '}
        <span>connection, rhythm, and transformation</span>. <br />
        Rebecca’s dedication to her craft has led her to perform at renowned
        institutions like <span>Dramaten</span>, live shows with artists both{' '}
        <span>nationally</span>
        <img
          src='/images/gallery/ROR1.jpg'
          alt=''
          className={styles.highlightthree}
        />{' '}
        <span>and internationally</span>
        <br /> experiences that have enriched her perspective and{' '}
        <span>expanded</span> her&nbsp;
        <span>creative horizons</span>.
      </p>
    </div>
  );
};

export default HomeSectionThree;
