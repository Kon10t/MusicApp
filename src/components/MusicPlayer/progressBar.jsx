import React, { useState, useEffect, useRef } from 'react';

function ProgressBar({ value, min, max, setCurrentTime, setSeekTime, setRandom }) {
  // console.log(`progressBar seekTime: ${value}`)
  // Hooks
  const [scaleX, setScaleX] = useState(); // Одно из двух значений для подставления в transform
  const [prevScaleX, setPrevScaleX] = useState();
  const [onMove, setOnMove] = useState(false); // Определяет, какое из двух значений подставлять в transform
  const [nothing, setNothing] = useState(false);
  const progressBarRef = useRef(null);

  // Начальная точка, срабатывает с помощью эвента onMouseDown на элементе
  const handleDragProgress = (event) => {
    event.preventDefault();
    document.ondragend = function() {
      return false;
    }

    // Высчитываем процент, с помощью useState он направляется прямиком в transform
    const progressBarWidth = progressBarRef.current.offsetWidth;
    const clickX = event.clientX - progressBarRef.current.getBoundingClientRect().left;
    const newScaleX = clickX / progressBarWidth;
    
    setScaleX(newScaleX);
    setOnMove(true);

    // Добавляем события
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleDragEnd);
  };

  // Срабатывает при движении мыши на элементе, реализует drag эвент
  const handleMouseMove = (event) => {
    // Высчитываем процент, с помощью useState он направляется прямиком в transform
    const progressBarWidth = progressBarRef.current.offsetWidth;
    const clickX = event.clientX - progressBarRef.current.getBoundingClientRect().left;
    const newScaleX = clickX / progressBarWidth;
    setScaleX(newScaleX);
  };

  // Срабатывает при отпускании мыши на элементе
  const handleDragEnd = (event) => {
    // Высчитываем процент, который отправляем в currentTime для перемотки времени
    const progressBarWidth = progressBarRef.current.offsetWidth;
    const clickX = event.clientX - progressBarRef.current.getBoundingClientRect().left;
    const newScaleX = clickX / progressBarWidth;
    const changedSeekTime = max * newScaleX;

    // console.log(`changedSeekTime: ${changedSeekTime}`);

    setCurrentTime(changedSeekTime);
    setSeekTime(changedSeekTime / max);
    setRandom(Math.random())

    setOnMove(false);
    

    // Убираем события
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleDragEnd);
  };

  // useEffect(() => {
  //   if (!onMove) {
  //     setScaleX(value);
  //   }
  // }, [value, onMove]);

  return (
    <div className='h-[30px] cursor-pointer' ref={progressBarRef}>
      <div
        className='bg-gray-500 h-[30px] z-10'
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
