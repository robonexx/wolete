import Image from 'next/image';
import styles from './page.module.css';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <section className={styles.section}>some content</section>
    </div>
  );
}
