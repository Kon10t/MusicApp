import React, { useState, useRef } from 'react';

function ProgressBar({ value, min, max, setCurrentTime, setSeekTime, setRandom, NextTrack }) {

  // Hooks
  const [scaleX, setScaleX] = useState(); // Одно из двух значений для подставления в transform
  const [onDrag, setOnDrag] = useState(false); // Определяет, какое из двух значений подставлять в transform
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
    setOnDrag(true);

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

    if (newScaleX >= 0 && newScaleX <= 1) {
      setScaleX(newScaleX);
    }
    if (newScaleX < 0) {
      setScaleX(0);
    }
    if (newScaleX > 1) {
      setScaleX(1);
    }
  };

  // Срабатывает при отпускании мыши на элементе
  const handleDragEnd = (event) => {
    // Высчитываем процент, который отправляем в currentTime для перемотки времени
    const progressBarWidth = progressBarRef.current.offsetWidth;
    const clickX = event.clientX - progressBarRef.current.getBoundingClientRect().left;
    const newScaleX = clickX / progressBarWidth;
    const changedSeekTime = max * newScaleX;

    // console.log(`changedSeekTime: ${changedSeekTime}`);

    // changedSeekTime - это как e.target.currentTime / e.target.duration
    // setSeekTime(changedSeekTime / max); Тут меняем время прогресс бара, обновляя value
    console.log(`sd:${changedSeekTime}`)
    const Test = changedSeekTime / max;
    if (Test >= 0 && Test <= 1) {
      setSeekTime(changedSeekTime / max);
      setCurrentTime(changedSeekTime); // После отпускания мыши, меняем время трека
    }
    if (Test < 0) {
      console.log('TRUE')
      setSeekTime(0);
      setCurrentTime(0);
    }
    if (Test >= 1) {
      setSeekTime(0);
      setCurrentTime(0);
      NextTrack();
    }

    // Для массива зависимостей, чтобы обновлять currentTime
    setRandom(Math.random())

    setOnDrag(false);
    

    // Убираем события
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleDragEnd);
  };

  return (
    <div className='h-[13px] cursor-pointer' ref={progressBarRef}>
      <div
        className='bg-gray-500 h-[13px] z-10'
        onMouseDown={handleDragProgress}
      >
        <div
          className='progress-line bg-yellow-500 h-[13px] relative origin-left'
          style={{ transform: `scaleX(${onDrag ? scaleX : value})` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
