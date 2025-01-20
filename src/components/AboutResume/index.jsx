'use client';
import React, { useEffect, useRef } from 'react';
import styles from './AboutResume.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Table data
const productionsData = {
  stageProductions: [
    {
      title: 'RAISED ON RHYTHM',
      role: 'Dancer/Co-creator',
      location: 'Dramaten',
      year: '2023/24/25',
    },
    {
      title: 'FROM NOTHING TO SOMETHING',
      role: 'Dancer',
      location: 'BINTA COKER',
      year: '2022',
    },
    {
      title: 'DEN OMÄTTLIGA VÄGEN',
      role: 'Dancer',
      location: 'Dramaten AB/National Black Theatre',
      year: '2022',
    },
    {
      title: 'UNDERKASTELSE',
      role: 'Movement Artist',
      location: 'Kulturhuset Stadsteatern',
      year: '2018',
    },
    {
      title: 'FRISTADEN',
      role: 'Dancer/Actor',
      location: 'Hops&Hogs AB',
      year: '2018',
    },
  ],
  creativeOutlet: [
    {
      title: 'Beyond Borders Lab',
      location: 'Project by Sheree Lenting',
      year: '2024',
    },
    {
      title: 'Itching to be',
      location: 'Dance film by Amelis Riquelme',
      year: '2024',
    },
    {
      title: 'DONYA DRASAN, live show',
      location: 'Eldfesten',
      year: '2024',
    },
    {
      title: 'ANTWAN, live show',
      location: 'Avicii Arena',
      year: '2023',
    },
    {
      title: 'Mr EAZI & Choplife Sounsystem',
      location: 'STHLM Kulturfestival',
      year: '2023',
    },
    {
      title: 'AURELIA DEY, Community Service',
      location: 'TOUR',
      year: '2023',
    },
    {
      title: 'REDBULL Dance',
      location: 'Showcase',
      year: '2023',
    },
    {
      title: 'Hon är på väg',
      location: 'M9 Martin Mutumba, music video',
      year: '2022',
    },
    {
      title: 'NAVIGATORS',
      location: 'TOUR',
      year: '2022',
    },
    {
      title: 'Da Juice Bar',
      location: 'Alpha Marigo, music video',
      year: '2022',
    },
    {
      title: 'MAPEI, live show',
      location: 'Kulturhuset Parkteatern',
      year: '2021',
    },
    {
      title: "Mac 'n Cheese",
      location: 'Ambra Succi, music video',
      year: '2020',
    },
    {
      title: 'This too shall pass',
      location: 'Avatar Horns, music video',
      year: '2020',
    },
    {
      title: 'JASMINE KARA, live show',
      location: 'Pride STHLM',
      year: '2019',
    },
    {
      title: 'LINNEA HENRIKSSON, live show',
      location: 'Popaganda',
      year: '2018',
    },
    {
      title: 'Ger dig allt jag har',
      location: 'Ken Ring, music video',
      year: '2018',
    },
    {
      title: 'Astalavista',
      location: 'Wendy Shay, music video',
      year: '2018',
    },
    {
      title: 'Rooftop',
      location: 'Clara Mae, music video',
      year: '2018',
    },
    {
      title: 'Say Yes to Strong',
      location: 'Glitter, commercial',
      year: '2018',
    },
    {
      title: 'Gothia Cup, live show',
      location: 'Ullevi',
      year: '2017',
    },
    {
      title: 'SEINABO SEY',
      location: 'Grammy Awards',
      year: '2016',
    },
    {
      title: 'PANETOZ',
      location: 'Music video',
      year: '2016',
    },
    {
      title: 'I Am Santa',
      location: 'LYKO, commercial',
      year: '2016',
    },
  ],
  educatorWorkshops: [
    'STHLM Dance University',
    'Diambra',
    'Ballet Academy',
    'Scandinavian Academy',
    'DBF Gotland',
    'Karibu Danceschool',
    'Vimmerby High School',
    'Gravity Studio',
    'Step In',
    'Ubuntu Base',
    'Yogansa',
    'Danscenter',
    'Studjefrämjandet',
    'Springbeast',
  ],
};

const AboutResume = () => {
  const tableRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(rowsRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: tableRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <div className={styles.aboutResume}>
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

        <div className={styles.table}>
          {/* Stage Productions Section */}
          <div className={styles.tableSection}>
            <h3 className={styles.tableTitle}>Stage Productions</h3>
            {productionsData.stageProductions.map((item, index) => (
              <div key={index} className={styles.tableRow}>
                <span className={styles.label}>{item.title}</span>
                <span className={styles.value}>
                  {item.role}, {item.location}, {item.year}
                </span>
              </div>
            ))}
          </div>

          {/* Selection / Creative Outlet Section */}
          <div className={styles.tableSection}>
            <h3 className={styles.tableTitle}>Selection / Creative Outlet</h3>
            {productionsData.creativeOutlet.map((item, index) => (
              <div key={index} className={styles.tableRow}>
                <span className={styles.label}>{item.title}</span>
                <span className={styles.value}>
                  {item.location}, {item.year}
                </span>
              </div>
            ))}
          </div>

          {/* Educator / Workshops Section */}
          <div className={styles.tableSection}>
            <h3 className={styles.tableTitle}>Educator / Workshops</h3>
            {productionsData.educatorWorkshops.map((workshop, index) => (
              <div key={index} className={styles.tableRow}>
                <span className={styles.value}>{workshop}</span>
              </div>
            ))}
          </div>
        </div>

        <img
          src='/images/becka.png'
          alt='Cover'
          className={styles.coverPic}
        />
      </div>
    </div>
  );
};

export default AboutResume;
