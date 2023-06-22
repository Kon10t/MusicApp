import React, {useRef, useState} from "react";
import Rewind from "../../Rewind/Rewind.js";

// SVG for Button
import pauseSVG from '../../pause-circle-svgrepo-com.svg';
import playSVG from '../../play-button-svgrepo-com.svg';

const Playback = ({audioRef, timerRef}) => {
    
    const PlaybackImage = useRef(null);
    const [boolean, setBoolean] = useState(true);

    function handlePlay() {
      // const currentTrack = audios[0];
      // console.log(currentTrack.path)
      // setCurrentAudio(currentTrack.path)
      
      if (boolean) {
        audioRef.current.play();
        setBoolean(false);
        setPlaybackAttribute(pauseSVG, 'pause');
        // PlaybackImage.current.alt = 'pause';
        // PlaybackImage.current.src = pauseSVG;
      } else {
        audioRef.current.pause();
        setBoolean(true);
        setPlaybackAttribute(playSVG, 'play');
        // PlaybackImage.current.src = playSVG;
        // PlaybackImage.current.alt = 'play';
        
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    function setPlaybackAttribute(src, alt) {
      PlaybackImage.current.src = src;
      PlaybackImage.current.alt = alt;
    }


    return (
      <>
        <button onClick={handlePlay}>
          <img alt="play" src={playSVG} ref={PlaybackImage} height="20px" width="20px"/>
        </button>

        <Rewind setPlaybackAttribute={setPlaybackAttribute()} audioRef={audioRef} />
      </>
    )
}

export default Playback