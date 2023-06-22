import React, { useState } from "react";
import GetService from "../../services/services.js";

// SVG for Button
import playSVG from '../../image/PlayPause/play-button-svgrepo-com.svg';

function Rewind({setPlaybackAttribute, audioRef}) {

  // determine audio in arr
  const [counter, setCounter] = useState(0);

  const [audios, setAudios] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);

  function handleNext() {
    const data = GetService('http://localhost:8800/audio_files');
    
    setCounter(counter + 1);
    setAudios(data);
    
    audios.map((index, value, array) => {
      setCurrentAudio(array[counter].path);
    })
    console.log(audios[counter].path);

    audioRef.current.pause();

    setPlaybackAttribute(playSVG, 'play');
    // SoundLife.current.src = playSVG;
    // SoundLife.current.alt = 'play';
  }

  function handlePrev() {
    setCounter(counter - 1);
    
    audios.map((index, value, array) => {
      setCurrentAudio(array[counter].path);
    })
    console.log(audios[counter].path);

    audioRef.current.pause();

    setPlaybackAttribute(playSVG, 'play');
    // SoundLife.current.src = playSVG;
    // SoundLife.current.alt = 'play';
  }

  return (
    <>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </>
  )
}

export default Rewind