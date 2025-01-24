import styles from './page.module.scss';
import ImageGallery from '@/components/ImageGallery';

export default function Gallery() {
  return (
    <div className={styles.page}>
      <ImageGallery />
    </div>
  );
}
