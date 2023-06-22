import React, { useState, useEffect } from 'react';

function ProgressBar({ value, min, max, setCurrentTime, setSeekTime }) {

  const [scaleX, setScaleX] = useState();
  const [onMove, setOnMove] = useState(true);

  // Функция, вызываемая при перемещении ползунка
  const handleDragProgress = (event) => {
    // Получаем координаты клика относительно progress-line
    // const clickX = event.clientX - event.target.getBoundingClientRect().left;
    // const maxInputWidth = event.target.clientWidth;

    // Вычисляем новое значение seekTime
    // const percent = clickX / maxInputWidth;
    // const changedSeekTime = min + (max - min) * percent;

    // Обновляем seekTime и выполняем другие необходимые действия

    // Дополнительные действия, связанные с перемоткой песни
    setOnMove(false);
    document.onmousemove = function(event) {
      MoveAt(event);
    }
  };

  // Функция, вызываемая при отпускании кнопки мыши
  const handleDragEnd = (event) => {
    const clickX = (event.clientX / event.target.offsetWidth);
    const changedSeekTime = max * clickX;

    console.log(`clickX: ${clickX}`);
    console.log(`changedSeekTime: ${changedSeekTime}`);
    setOnMove(true);
    setCurrentTime(changedSeekTime);

    // Дополнительные действия при отпускании ползунка
    document.onmousemove = null;
    event.target.onmouseup = null;
    event.target.style.position = 'relative';
  };

  function MoveAt(event) {
    let value = (event.clientX / event.target.offsetWidth);
    console.log(`value: ${value}`);
    setScaleX(value);
    // event.target.style.transform = `scaleX(${value})`

    let scaleX = window.getComputedStyle(event.target).getPropertyValue('transform').split(' ');
    console.log(scaleX);
    console.log('click')
  }

  return (
    <div
      className='h-[15px]'
      onMouseDown={(e) => handleDragProgress(e)}
      onMouseUp={(e) => handleDragEnd(e)}>
      <div className="bg-gray-500 h-[15px]">
        <div
          className={`progress-line bg-yellow-500 h-[15px] relative origin-left`}
          style={onMove ? { transform: `scaleX(${value})` } : { transform: `scaleX(${scaleX})` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;