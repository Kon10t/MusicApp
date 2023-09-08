import React from 'react';
import { BsFillPauseFill, BsFillPlayFill, BsSkipBackwardFill, BsSkipForwardFill } from 'react-icons/bs';

const Controls = ({ isPlaying, handlePlay, handlePause, handleSkipPrev ,handleSkipNext }) => (
  <div className="flex justify-center items-center">
    <div>
      <BsSkipBackwardFill size={20} color="#FFF" onClick={handleSkipPrev} className="cursor-pointer hover:opacity-50 active:opacity-30" />
    </div>
    <div className='mx-4'>
      {isPlaying ? (
        <BsFillPauseFill size={35} color="#FFF" onClick={handlePause} className="cursor-pointer hover:opacity-50 active:opacity-30" />
      ) : (
        <BsFillPlayFill size={35} color="#FFF" onClick={handlePlay} className="cursor-pointer hover:opacity-50 active:opacity-30" />
      )}
    </div>
    <div>
      <BsSkipForwardFill size={20} color="#FFF" onClick={handleSkipNext} className="cursor-pointer hover:opacity-50 active:opacity-30" />
    </div>
  </div>
);

export default Controls;