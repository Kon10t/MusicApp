import React from 'react';
import Slide from './Slide.jsx';

const Slides = ({ data, slide }) => {

  return (
    <div className='flex height-[100%]'
      style={{ transform: `translateX(-${slide * 100}%)` }}
    >
      {data?.map((elem, i) => (
        <Slide 
          key={i}
          data={elem}
        />
      ))}
    </div>
  )
}

export default Slides;