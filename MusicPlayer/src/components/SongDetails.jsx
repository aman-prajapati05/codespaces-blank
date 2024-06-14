import React, { useContext } from 'react';
import MusicPlayerContext from './MusicPlayerContext';


const SongDetails = () => {
  const { musicIndex, allMusic } = useContext(MusicPlayerContext);
  return (
    <div className="song-details">
      <p className="name">{allMusic[musicIndex - 1].name}</p>
      <p className="artist">{allMusic[musicIndex - 1].artist}</p>
    </div>
  );
};

export default SongDetails;
