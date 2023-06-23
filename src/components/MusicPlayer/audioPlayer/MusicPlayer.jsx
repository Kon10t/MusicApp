import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSong, playPause } from '../../../redux/playerSlice.js'

import ProgressBar from "../progressBar.jsx";
import VolumeChange from "../volumeChange.jsx";
import Controls from "../Controls.jsx"
import Audio from "../Audio.jsx";

export default function MusicPlayer() {

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const handlePlayClick = () => {
    dispatch(playPause(true));
  }

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  const [currentTime, setCurrentTime] = useState(1);
  const [duration, setDuration] = useState(192);
  const [volume, setVolume] = useState(0.3);
  const [seekTime, setSeekTime] = useState(0);
  console.log(`seekTime: ${seekTime}`);
  // const [audios, setAudios] = useState([]);
  // const [currentAudio, setCurrentAudio] = useState(null);

  // get Data from DB
  // useEffect(() => {
  //   const fetchAllAudios = async () => {
  //       try {
  //         const res = await axios.get(`http://localhost:8800/audio_files`);
  //         setAudios(res.data);
  //         setCurrentAudio(res.data[0].path);
  //         console.log(res.data[0].path)
  //       } catch (err) {
  //         console.log(err)
  //       }
  //     }
  //     fetchAllAudios()
  // }, []);

  // catchError
  
  function handleCanPlay() {
    console.log('Audio file is ready to play');
  }
  function handleError() {
    console.log('Error loading audio file');
  }

  const onTimeUpdate = async (event) => {
    const newSeekTime = event.target.currentTime / event.target.duration;
    requestAnimationFrame(() => {
      setSeekTime(newSeekTime);
    })
  }

  return (
    <div className="fixed bottom-0 w-[100%] bg-slate-500 opacity-70">
      <div className="mx-4 my-4">
        <img src={activeSong?.cover} alt="Music_Player-Cover" />
      </div>
      <div className="flex justify-center items-center">
        <Controls isPlaying={isPlaying} handlePause={handlePauseClick} handlePlay={handlePlayClick} />
      </div>
      <ProgressBar
        isPlaying={isPlaying}
        value={seekTime}
        min="0"
        max={duration}
        setCurrentTime={setCurrentTime}
        setSeekTime={setSeekTime}
      />
      <VolumeChange
        value={volume}
        min="0"
        max="1"
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
      <Audio
        activeSong={activeSong}
        isPlaying={isPlaying}
        volume={volume}
        currentTime={currentTime}
        onLoadedData={(event) => setDuration(event.target.duration)}
        onTimeUpdate={(event) => onTimeUpdate(event)}
        handleCanPlay={handleCanPlay}
        handleError={handleError}
      />
    </div>
  )
}
