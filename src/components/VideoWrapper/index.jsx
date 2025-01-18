import React from 'react';
import styles from './VideoWrapper.module.scss';

const VideoWrapper = () => {
  return (
    <div className={styles.video}>
      <video
        src='/videos/video1.mp4'
        autoPlay
        loop
        muted
        className={styles.videoPlayer}
      />
    </div>
  );
};

export default VideoWrapper;
