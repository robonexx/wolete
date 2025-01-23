import styles from './page.module.scss';
import Paragraph from '@/components/TextRevealOnScroll/Paragraph';
import ParagraphWord from '@/components/TextRevealOnScroll/ParagraphWord';
import ParagraphChar from '@/components/TextRevealOnScroll/CharacterChar';

const paragraph =
  ' Ubuntu Base aims to be the hub for the afro/swedish community in Stockholm. The aim is to contribute to the Swedish cultural scene and create a safe space for African cultural expression with a focus on shared dance- and music experiences.. ';

const paragraph2 =
  'Also promoting integration and cultural exchange with a mission to support people in their personal  development using creative tools..  ';

const paragraph3 =
  'You can find more about UBUNTU BASE classes on the app, click the button below and come join us! ';

export default function Ubuntu() {
  return (
    <div className={styles.page}>
      <div className={styles.imageWrapper}>
        <img
          src='/images/partners/UBUNTU.png'
          alt=''
          className={styles.image}
        />
      </div>
      <ParagraphWord paragraph={paragraph} />
      <div style={{ height: '5vh' }}></div>
      <ParagraphWord paragraph={paragraph2} />
      <div style={{ height: '5vh' }}></div>
      <ParagraphWord paragraph={paragraph3} />
      <div style={{ height: '5vh' }}></div>
      <div className={styles.buttons}>
        <button className={styles.btnPrimary}>
          {' '}
          <a
            href='https://www.mobileapp.app/to/IGIEAVC?ref=cl'
            target='_blank'
            rel='noopener noreferrer'
          >
            UBUNTU APP
          </a>
        </button>
      </div>
      <p className={styles.info}>
        6 Weeks of drop-in classes, 3 days a week, all open level (!)
        <br />
        <br />
        🩵MaarifaMondays 🩷TumbaTuesdays 💛 TendaThursdays
        <br />
        <br />
      </p>
      <p className={`${styles.info} ${styles.border}`}>
        Interested in buying the full block or a clip card? Send us a message in
        the app and we will send you payment method information.
      </p>
      <br />
      <br />
      <p className={styles.info}>
        ✨<span>BOOK NOW - PAY LATER </span>(January 25th)✨ Please note that
        all pre-bookings will be binding after receiving booking confirmation on
        January 20.
        <br />
        <br />
        Be mindful & always read the information on the booking page in the app.
        <br />
        <br />
        …… DROP-IN: 230kr (220kr on TendaThursdays) Maarifa/Tumba block (6
        weeks): 1300kr 6-clip: 1350kr 12-clip: 2400kr
        <br />
        <br />
        MORE INFO + REGISTRATION in Ubuntu app
      </p>
      <div className={styles.buttons}>
        <button className={styles.btnPrimary}>
          {' '}
          <a
            href='https://www.mobileapp.app/to/IGIEAVC?ref=cl'
            target='_blank'
            rel='noopener noreferrer'
          >
            UBUNTU APP
          </a>
        </button>
      </div>
    </div>
  );
}
