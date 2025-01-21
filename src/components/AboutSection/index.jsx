'use client';
import React, { useEffect, useRef } from 'react';
import styles from './AboutSection.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.coverDrop}>
        <div className={styles.ingrHead}>
          About <br />
          Me&nbsp; <span>❤️</span>
        </div>
        <p className={styles.ingrAbout}>
          Rebecca Wolete is a Dance artist, Educator, Organizer and Cultural
          Ambassador. A dynamic force of movement and expression, a dancer whose
          artistry flows seamlessly between the modern and the ancestral.
          <br />
          <br />
          Rooted in the vibrant traditions of Afrocentric culture and driven by
          a deep passion for community, her journey is one of connection,
          rhythm, and transformation. Rebecca’s dedication to her craft has led
          her to perform at renowned institutions like Dramaten, live shows with
          artists both nationally and internationally, experiences that have
          enriched her perspective and expanded her creative horizons.
          <br />
          <br />
          Beyond the stage, Rebecca is a passionate advocate for community
          empowerment. She believes in the transformative power of dance as a
          tool for healing, unity, and cultural celebration.
          <br />
          Whether leading workshops, performing for diverse audiences, or
          collaborating on projects that spotlight African artistry, Rebecca’s
          work is a testament to her commitment to using dance as a medium for
          change.
          <br />
          <br />
          For Rebecca, dance is more than a performance—it’s a bridge that
          transcends language, weaving stories that resonate across generations
          and cultures.
        </p>

        <img src='/images/becka.png' alt='Cover' className={styles.coverPic} />
      </div>
    </div>
  );
};

export default AboutSection;
