import React, { useState, useEffect, useRef } from 'react';

function ProgressBar({ value, min, max, setCurrentTime, setSeekTime }) {
  console.log(`progressBar seekTime: ${value}`)
  const [scaleX, setScaleX] = useState();
  const [onMove, setOnMove] = useState(false);
  const progressBarRef = useRef(null);

  const handleDragProgress = (event) => {
    event.preventDefault();
    setOnMove(true);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleDragEnd);
  };

  const handleMouseMove = (event) => {
    const progressBarWidth = progressBarRef.current.offsetWidth;
    const clickX = event.clientX - progressBarRef.current.getBoundingClientRect().left;
    const newScaleX = clickX / progressBarWidth;
    setScaleX(newScaleX);
  };

  const handleDragEnd = (event) => {
    const progressBarWidth = progressBarRef.current.offsetWidth;
    const clickX = event.clientX - progressBarRef.current.getBoundingClientRect().left;
    const newScaleX = clickX / progressBarWidth;
    const changedSeekTime = max * newScaleX;

    console.log(`changedSeekTime: ${changedSeekTime}`);

    setCurrentTime(changedSeekTime);
    setSeekTime(changedSeekTime / max);
    setOnMove(false);

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleDragEnd);
  };

  // useEffect(() => {
  //   if (!onMove) {
  //     setScaleX(value);
  //   }
  // }, [value, onMove]);

  return (
    <div className='h-[30px]' ref={progressBarRef}>
      <div
        className='bg-gray-500 h-[30px]'
        onMouseDown={handleDragProgress}
      >
        <div
          className='progress-line bg-yellow-500 h-[30px] relative origin-left'
          style={{ transform: `scaleX(${onMove ? scaleX : value})` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
