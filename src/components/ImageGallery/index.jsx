'use client';
import React, { useState, Suspense } from 'react';
import {
  RiCloseFill,
  RiArrowRightCircleLine,
  RiArrowLeftCircleLine,
} from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './ImageGallery.module.scss';

const images = [
  '/images/gallery/DOV1.jpg',
  '/images/gallery/DOV2.jpg',
  '/images/gallery/DOV3.jpg',
  '/images/gallery/IMG_8627.jpg',
  '/images/gallery/ize.jpg',
  '/images/gallery/Basket.jpg',
  '/images/gallery/FN2S.jpg',
  '/images/gallery/IAm.jpg',
  '/images/gallery/IAM2.jpg',
  '/images/gallery/MrEazi.jpg',
  '/images/gallery/MrEazi2.jpg',
  '/images/gallery/raisedonrhythm_poster2.jpg',
  '/images/gallery/Redbull.jpg',
  '/images/gallery/ROR1.jpg',
  '/images/gallery/ROR2.jpg',
  '/images/gallery/ROR3.jpg',
  '/images/gallery/ROR4.jpg',
  '/images/gallery/ROR5.jpg',
  '/images/gallery/ROR6.jpg',
  '/images/gallery/Ullevi.jpg',
];

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.galleryWrapper}>
      <h2 className={styles.title}>Gallery</h2>
      <p>
        Explore the gallery to discover the dynamic artistry of Rebecca Wolete,
        a dance artist merging modern and ancestral expressions. Each image
        captures her vibrant passion for community, cultural celebration, and
        the transformative power of movement. Dive in and experience the essence
        of her creative journey.
      </p>

      {/* Masonry List */}
      <div className={styles.masonryList}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.masonryItem}
            onClick={() => openLightbox(index)}
          >
            {/* Next Image usage:
              Use width/height so aspect ratio is preserved */}
            <Image
              src={image}
              alt={`Gallery ${index}`}
              width={400}
              height={600} // or any approximate ratio
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            // Outer overlay
            className={styles.lightbox}
            onClick={closeLightbox} // Clicking overlay => close
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Blurred background image */}
            <motion.div
              className={styles.lightboxBackground}
              style={{
                backgroundImage: `url(${images[selectedIndex]})`,
              }}
            />

            {/* 
              Inner wrapper for the actual image + buttons. 
              onClick={e => e.stopPropagation()} ensures
              that clicking inside won't close the overlay.
            */}
            <motion.div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button */}
              <button className={styles.closeButton} onClick={closeLightbox}>
                <RiCloseFill />
              </button>

              {/* Prev Button */}
              <button className={styles.prevButton} onClick={showPrev}>
                <RiArrowLeftCircleLine />
              </button>

              {/* Next Button */}
              <button className={styles.nextButton} onClick={showNext}>
                <RiArrowRightCircleLine />
              </button>

              {/* Main Image in the lightbox */}
              <Suspense fallback={<div>Loading...</div>}>
                <Image
                  src={images[selectedIndex]}
                  alt={`Gallery ${selectedIndex}`}
                  width={1000}
                  height={800}
                  className={styles.lightboxImage}
                />
              </Suspense>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
