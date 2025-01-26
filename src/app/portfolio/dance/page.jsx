import styles from './page.module.scss';

export default function Dance() {
  return (
    <div className={styles.page}>
      {/* Headline Section */}
      <header className={styles.header}>
        <h1>Dance with Passion</h1>
        <p>
          Discover the vibrant productions and classes I've been part of. From
          exciting performances to my personal creations, take a journey through
          dance with me!
        </p>
      </header>

      {/* Productions Section */}
      <section className={styles.section}>
        <h2>Productions</h2>
        <p>
          Here are some of the productions I’ve had the privilege to dance in.
          These moments reflect the beauty of collaboration and the magic of
          storytelling through movement.
        </p>
        <div className={styles.videos}>
          <div>
            <h2>Live performances</h2>
            <iframe
              src='https://www.youtube.com/embed/OHD4KhU4Ux4?si=SBxgQAojWEczUZJv'
              title='Production Video 1'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h2>Video productions</h2>
            <iframe
              src='https://www.youtube.com/embed/fBlfHMvVDr0?si=inj7Bji01IrX-P1I'
              title='Production Video 2'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Classes or Personal Work Section */}
      <section className={styles.section}>
        <h2>My Work & Classes</h2>
        <p>
          From choreographed performances to teaching the art of dance, here is
          a glimpse into my personal projects and classes. Stay tuned for more
          updates!
        </p>
        <div className={styles.videos}>
          {/* Add additional YouTube video links here */}
        </div>
      </section>
    </div>
  );
}
