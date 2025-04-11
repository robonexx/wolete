import React from 'react';
import styles from './VideoWrapper.module.scss';

const VideoWrapper = () => {
  return (
    <div className={styles.video}>
      <video
        src='/videos/wolete.webm'
        playsInline
        loop
        autoPlay
        preload='auto'
        muted
        className={styles.videoPlayer}
      />
    </div>
  );
};

export default VideoWrapper;
