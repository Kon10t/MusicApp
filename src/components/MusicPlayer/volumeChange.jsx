import React, { useState } from "react";
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

export default function VolumeChange({ value, min, max, onChange, setVolume }) {
// function handleVolumeChange(e) {
//     const value = e.target.value / 100;
//     console.log(value);
//     setVolume(value);
//     audioRef.current.volume = value;
//   }
const VolumeIcon = () => {

  return (
    <>
      {value <= 1 && value > 0.5 && <BsFillVolumeUpFill size={25} color="#FFF" onClick={() => setVolume(0)} />}
      {value <= 0.5 && value > 0 && <BsVolumeDownFill size={25} color="#FFF" onClick={() => setVolume(0)} />}
      {value === 0 && <BsFillVolumeMuteFill size={25} color="#FFF" onClick={() => setVolume(1)} />}
    </>
  )
}

return (
  <div>
    <VolumeIcon />
    <input
      type="range"
      step="any"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  </div>
)
}