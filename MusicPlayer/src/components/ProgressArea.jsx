import React, { useContext, useEffect, useRef } from 'react';
import MusicPlayerContext from './MusicPlayerContext';

const ProgressArea = () => {
  const { currentTime, duration, setCurrentTime, mainAudio } = useContext(MusicPlayerContext);
  const progressAreaRef = useRef();

  useEffect(() => {
    const progressBar = progressAreaRef.current;
    progressBar.style.width = `${(currentTime / duration) * 100}%`;
  }, [currentTime, duration]);

  return (
    <div className="progress-area" ref={progressAreaRef}>
      <div className="progress-bar"></div>
      <div className="song-timer">
        <span className="current-time">{currentTime}</span>
        <span className="max-duration">{duration}</span>
      </div>
    </div>
  );
};

export default ProgressArea;
