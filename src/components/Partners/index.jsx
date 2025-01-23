// components/Partners.js
import Image from 'next/image';
import styles from './Partners.module.scss';

const partners = [
  'Blackout.png',
  'DOPEST.png',
  'Dramaten.png',
  'NBT.png',
  'Pride.png',
  'Sthlm Stad.png',
  'SVT.png',
  'UBUNTU.png',
  'Vi som alskar.png',
  'Apple.png',
  'Business&Dreams.png',
  'Circle K.png',
  'Glitter.png',
  'Mosquito.png',
  'Redbull.png',
  'Riksteatern.png',
  'Selam.png',
  'Y3nko.png',
  'cinema africa.png',
  'Kulturhuset stadsteatern.png',
];

const Partners = () => {
  return (
    <div className={styles.grid}>
      {partners.map((partner, index) => (
        <div key={index} className={styles.card}>
          <Image
            src={`/images/partners/${partner}`}
            alt={partner.replace('.png', '')}
            width={200}
            height={200}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Partners;
