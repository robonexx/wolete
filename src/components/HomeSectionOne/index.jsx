import React from 'react';
import styles from './HomeSectionOne.module.scss';

const HomeSectionOne = () => {
  return (
    <div className={styles.homeSectionOne}>
      <p className={styles.tagline}> Rebecca Wooolete</p>

      <div className={styles.aboutHead}>
        is a Dance artist, <br />
        Educator, Organizer <br />
        and Cultural Ambassador
      </div>

      <p className={styles.aboutDes}>
        A dynamic force of movement and expression, <br />
        a dancer whose artistry flows seamlessly <br />
        between the modern and the ancestral.
      </p>

      <img src='/images/image2.JPG' alt='Image 1' className={styles.imageOne} />
      <img src='/images/image4.JPG' alt='Image 2' className={styles.imageTwo} />
      <img
        src='/images/image1.JPG'
        alt='Image 3'
        className={styles.imageThree}
      />
      <img
        src='/images/image3.JPG'
        alt='Image 4'
        className={styles.imageFour}
      />
    </div>
  );
};

export default HomeSectionOne;
