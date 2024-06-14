import React, { createContext, useState, useEffect, useRef } from 'react';

const MusicPlayerContext = createContext();

const allMusic = [
  {
    name: "Harley Bird - Home",
    artist: "Jordan Schor",
    img: "music-1",
    src: "music-1"
  },
  {
    name: "Ikson Anywhere – Ikson",
    artist: "Audio Library",
    img: "music-2",
    src: "music-2"
  },
  {
    name: "Beauz & Jvna - Crazy",
    artist: "Beauz & Jvna",
    img: "music-3",
    src: "music-3"
  },
  {
    name: "Hardwind - Want Me",
    artist: "Mike Archangelo",
    img: "music-4",
    src: "music-4"
  },
  {
    name: "Jim - Sun Goes Down",
    artist: "Jim Yosef x Roy",
    img: "music-5",
    src: "music-5"
  },
  {
    name: "Lost Sky - Vision NCS",
    artist: "NCS Release",
    img: "music-6",
    src: "music-6"
  }
];

export const MusicPlayerProvider = ({ children }) => {
  const [musicIndex, setMusicIndex] = useState(Math.floor((Math.random() * allMusic.length) + 1));
  const [isMusicPaused, setIsMusicPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    loadMusic(musicIndex);
  }, [musicIndex]);

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('loadeddata', handleLoadedData);
    audioRef.current.addEventListener('ended', handleSongEnd);

    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.removeEventListener('loadeddata', handleLoadedData);
      audioRef.current.removeEventListener('ended', handleSongEnd);
    };
  }, []);

  const loadMusic = (indexNumb) => {
    const music = allMusic[indexNumb - 1];
    audioRef.current.src = `/songs/${music.src}.mp3`;
    audioRef.current.load();
  };

  const playMusic = () => {
    audioRef.current.play();
    setIsMusicPaused(false);
  };

  const pauseMusic = () => {
    audioRef.current.pause();
    setIsMusicPaused(true);
  };

  const nextMusic = () => {
    setMusicIndex((prevIndex) => (prevIndex % allMusic.length) + 1);
  };

  const prevMusic = () => {
    setMusicIndex((prevIndex) => (prevIndex - 2 + allMusic.length) % allMusic.length + 1);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSongEnd = () => {
    nextMusic();
  };

  const shuffleMusic = () => {
    const randomIndex = Math.floor(Math.random() * allMusic.length) + 1;
    setMusicIndex(randomIndex);
  };

  return (
    <MusicPlayerContext.Provider value={{
      musicIndex, setMusicIndex, isMusicPaused, setIsMusicPaused,
      currentTime, setCurrentTime, duration, setDuration,
      allMusic, loadMusic, playMusic, pauseMusic, nextMusic, prevMusic, shuffleMusic
    }}>
      {children}
      <audio ref={audioRef} />
    </MusicPlayerContext.Provider>
  );
};

export default MusicPlayerContext;
