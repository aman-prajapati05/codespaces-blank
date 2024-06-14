import React, { useContext } from 'react';
import MusicPlayerContext from './MusicPlayerContext';


const Controls = () => {
  const { playMusic, pauseMusic, isMusicPaused, prevMusic, nextMusic } = useContext(MusicPlayerContext);

  return (
    <div className="controls">
      <i id="repeat-plist" className="material-icons" title="Playlist looped">repeat</i>
      <i id="prev" className="material-icons" onClick={prevMusic}>skip_previous</i>
      <div className="play-pause" onClick={isMusicPaused ? playMusic : pauseMusic}>
        <i className="material-icons">{isMusicPaused ? 'play_arrow' : 'pause'}</i>
      </div>
      <i id="next" className="material-icons" onClick={nextMusic}>skip_next</i>
      <i id="more-music" className="material-icons" >queue_music</i>
    </div>
  );
};

export default Controls;
