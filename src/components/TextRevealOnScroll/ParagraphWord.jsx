'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './style.module.scss';

export default function ParagraphWord({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  // Split paragraph into words, detecting special words with regex
  const words = paragraph.split(' ').map((word) => {
    const isSpecial = word.startsWith('#') && word.endsWith('#');
    return {
      text: isSpecial ? word.slice(1, -1) : word, // Remove the hashtags
      isSpecial, // Mark if this is a special word
    };
  });

  return (
    <p ref={container} className={styles.paragraph}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            isSpecial={word.isSpecial}
          >
            {word.text}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range, isSpecial }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={isSpecial ? styles.specialWord : styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
