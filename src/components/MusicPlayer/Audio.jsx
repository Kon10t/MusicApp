import React, { useEffect, useRef, useState } from "react";

const Audio = ( {activeSong, isPlaying, volume, currentTime, random, handleCanPlay, handleError, onLoadedData, onTimeUpdate} ) => {
  // console.log(volume);
  // ref for audio tag
  const audioRef = useRef(null);
  
  const [prevCurrent, setPrevCurrent] = useState();

  // if (currentTime == prevCurrent) {
  //   setCurrentTime();
  // }

  // audio play and pause event
  if (audioRef.current) {
    // console.log(audioRef.current)
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }

  // async volume update
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  // async audio time update
  useEffect(() => {
    if (currentTime >= 0 && currentTime <= audioRef.current.duration) {
      audioRef.current.currentTime = currentTime; 
    } else {
      console.log('sds')
    }
  }, [currentTime, random]);
  
  return (
    <>
      <audio
        ref={audioRef}
        src={`http://localhost/music-app/src/songs/${activeSong?.src}.mp3`}
        onCanPlay={handleCanPlay}
        onError={handleError}
        onLoadedData={onLoadedData}
        onTimeUpdate={onTimeUpdate}
      />
    </>
  )
}

export default Audio;