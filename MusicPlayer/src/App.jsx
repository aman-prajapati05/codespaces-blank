import React from 'react';
// import TopBar from './components/TopBar';
// import ImageArea from './components/ImageArea';
// import SongDetails from './components/SongDetails';
// import ProgressArea from './components/ProgressArea';
// import Controls from './components/Controls';
// import MusicList from './components/MusicList';
import { MusicPlayerProvider } from './components/MusicPlayerContext';
import MusicPlayer from './components/MusicPlayer';


function App() {
  return (
    <MusicPlayerProvider>
 
        <MusicPlayer/>

    </MusicPlayerProvider>
  );
}

export default App;

