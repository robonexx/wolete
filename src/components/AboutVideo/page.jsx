'use client';
import React, { useRef, useState } from 'react';
import styles from './AboutVideo.module.scss';

const AboutVideo = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isMuted, setIsMuted] = useState(true); // State to track if the video is muted

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Toggle the muted property
      setIsMuted(videoRef.current.muted); // Update the state
    }
  };

  return (
    <div className={styles.aboutVideo} id='video'>
      <div className={styles.coverDrop}>
        <video
          ref={videoRef}
          loop
          autoPlay
          muted={isMuted}
          src='/videos/compilation.webm'
          className={styles.coverPic}
        />
        <button onClick={toggleMute} className={styles.soundToggle}>
          {isMuted ? 'Unmute' : 'Mute'} {isMuted ? '🔇' : '🔊'}
        </button>
      </div>
    </div>
  );
};

export default AboutVideo;
