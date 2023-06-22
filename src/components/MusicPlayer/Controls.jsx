import React from 'react';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';

const Controls = ({ isPlaying, handlePlay, handlePause }) => (
  <div>
    {isPlaying ? (
      <BsFillPauseFill size={45} color="#FFF" onClick={handlePause} className="cursor-pointer hover:opacity-50 active:opacity-30" />
    ) : (
      <BsFillPlayFill size={45} color="#FFF" onClick={handlePlay} className="cursor-pointer hover:opacity-50 active:opacity-30" />
    )}
  </div>
);

export default Controls;