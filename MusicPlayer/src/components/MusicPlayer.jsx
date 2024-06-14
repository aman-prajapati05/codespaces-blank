import React, { useContext } from 'react';
import MusicPlayerContext from './MusicPlayerContext';
import Controls from './Controls';
import MusicList from './MusicList';
import TopBar from './TopBar';

const MusicPlayer = () => {
  const { musicIndex, allMusic, currentTime, duration } = useContext(MusicPlayerContext);
  const music = allMusic[musicIndex - 1];

  return (
    <div className="wrapper">
      <TopBar/>
      <div className="img-area">
        <img src={`/images/${music.img}.jpg`} alt={music.name} />
      </div>
      <div className="song-details">
        <p className="name">{music.name}</p>
        <p className="artist">{music.artist}</p>
      </div>
      <div className="progress-area">
        <div className="progress-bar" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
        <div className="song-timer">
          <span className="current-time">{formatTime(currentTime)}</span>
          <span className="max-duration">{formatTime(duration)}</span>
        </div>
      </div>
      <Controls />
      <MusicList />
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export default MusicPlayer;
