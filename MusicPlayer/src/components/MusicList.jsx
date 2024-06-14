import React, { useContext } from 'react';
import MusicPlayerContext from './MusicPlayerContext';

const MusicList = () => {
  const { allMusic, musicIndex, setMusicIndex } = useContext(MusicPlayerContext);

  return (
    <div className="music-list">
      <ul>
        {allMusic.map((music, index) => (
          <li
            key={index}
            className={musicIndex === index + 1 ? 'playing' : ''}
            onClick={() => setMusicIndex(index + 1)}
          >
            <div className="row">
              <span>{music.name}</span>
              <p>{music.artist}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
