import Yanko from '@/components/Yanko';
import styles from './page.module.scss';
import PageTransition from '@/components/PageTransition';

export default function Yenko() {
  return (
    <div className={styles.page}>
      <PageTransition />
      <Yanko />
    </div>
  );
}
