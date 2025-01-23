import styles from './page.module.scss';
import Paragraph from '@/components/TextRevealOnScroll/Paragraph';
import ParagraphWord from '@/components/TextRevealOnScroll/ParagraphWord';
import ParagraphChar from '@/components/TextRevealOnScroll/CharacterChar';

const paragraph =
  'Lorem ipsum #dolor# sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ';

const paragraph2 =
  'You can find more about our classes on SvenskaLag follow the link below. ';

export default function Blackout() {
  return (
    <div className={styles.page}>
      <img
        src='/images/partners/Blackout.png'
        alt=''
        className={styles.image}
      />
      <Paragraph paragraph={paragraph} />
      <div style={{ height: '20vh' }}></div>
      <ParagraphWord paragraph={paragraph} />
      <div style={{ height: '20vh' }}></div>
      <ParagraphChar paragraph={paragraph2} />
      <div className={styles.buttons}>
        <button className={styles.btnPrimary}>
          {' '}
          <a
            href='https://www.svenskalag.se/blackoutfamilyab/sida/103742/borja-i-kidsgrupp?fbclid=PAZXh0bgNhZW0CMTEAAaYNpNc8JcSNxfQTyfL7C96mHFPbFO6CmmGOkNY1f5EqNz4gDnb0aBv5UxY_aem_IbCpdL0OUjdzYUG1824Olw'
            target='_blank'
            rel='noopener noreferrer'
          >
            Blackout on instagram
          </a>
        </button>
      </div>
    </div>
  );
}
