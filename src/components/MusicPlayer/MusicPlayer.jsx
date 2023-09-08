import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSong, playPause, setCurrentIndex } from '../../redux/playerSlice.js'

import ProgressBar from "./progressBar.jsx";
import VolumeChange from "./volumeChange.jsx";
import Controls from "./Controls.jsx"
import Audio from "./Audio.jsx";
import ControlsTrack from "./ControlsTrack.jsx";

export default function MusicPlayer() {

  const dispatch = useDispatch();
  const { activeSong, isPlaying, TopCharts, currentIndex } = useSelector((state) => state.player)
  // console.log(`skipSong: ${JSON.stringify(skipSong[currentIndex])}`);
  // console.log(`currentIndex: ${JSON.stringify(currentIndex)}`);
  const handleNextSkipClick = () => {
    if (currentIndex <= 1) {
      console.log(`innerNext currentIndex: ${currentIndex}`);
      dispatch(setActiveSong(TopCharts[currentIndex + 1]));
      dispatch(setCurrentIndex(currentIndex + 1));
    }
  }

  const handlePrevSkipClick = () => {
    if (currentIndex <= 2 && currentIndex > 0) {
      console.log(`outerPrev currentIndex: ${currentIndex}`);
      dispatch(setActiveSong(TopCharts[currentIndex -1]));
      dispatch(setCurrentIndex(currentIndex - 1));
    }
  }
  
  const handlePlayClick = () => {
    dispatch(playPause(true));
  }

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  // currentTime - измененное по нажатию на progressBar время трека
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(192);
  const [volume, setVolume] = useState(0.3);
  // seekTime - значение для обновления времени progressBar-(а)
  const [seekTime, setSeekTime] = useState(0);
  const [random, setRandom] = useState(0);
  // console.log(`currentTime: ${currentTime}`);
  // console.log(`random: ${random}`);

  // console.log(`seekTime: ${seekTime}`);
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

  const onTimeUpdate = (event) => {
    const newSeekTime = event.target.currentTime / event.target.duration;
    requestAnimationFrame(() => {
      setSeekTime(newSeekTime);
    })
  }

  return (
    <div className="fixed bottom-0 xl: 2xl:w-[1522.4px] 2.5xl:w-[1553.47px] 3xl:w-[1551px] 3xl:h-[90px] bg-hinted-black bg-light-ink-black opacity-70">
      <ProgressBar
        value={seekTime}
        min="0"
        max={duration}
        setCurrentTime={setCurrentTime}
        setSeekTime={() => setSeekTime()}
        setRandom={setRandom}
        NextTrack={handleNextSkipClick}
      />
      <div className="flex flex-row mx-4 my-4 justify-between">
        <div className="flex flex-row">
          <Controls isPlaying={isPlaying} handlePause={handlePauseClick} handlePlay={handlePlayClick} handleSkipPrev={handlePrevSkipClick} handleSkipNext={handleNextSkipClick}/>
          <ControlsTrack cover={activeSong?.cover} />
        </div>
        <div>
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
            random={random}
            onLoadedData={(event) => setDuration(event.target.duration)}
            onTimeUpdate={(event) => onTimeUpdate(event)}
            handleCanPlay={handleCanPlay}
            handleError={handleError}
          />
        </div>
      </div>
    </div>
  )
}
