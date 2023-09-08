import React, { useEffect, useState } from 'react';

import Slides from './Slides.jsx';
import SliderArrows from './SliderArrows.jsx';
import getRes from '../services/getRes.js';

export default function Slider() {

  // hooks
  const [data, setData] = useState();
  const [slides, setSlides] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Get Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const releaseData = await getRes('http://localhost:3000/AdvisableSongs');
        setData(releaseData);
        setSlides(releaseData.length);
      } catch (error) {
        console.log('Error:', error);
      }
    };
      fetchData();
  }, []);

  console.log(slides);
  console.log(currentSlide);

  function changeSlide(change) {
    if (currentSlide + change >= 0 && currentSlide + change < slides) {
      setCurrentSlide(currentSlide + (change));
    }
  }

  return (
    <div className='w-[100%] h-[200px] overflow-hidden'>
      <SliderArrows changeSlide={changeSlide} />
      <Slides data={data} slide={currentSlide} />
    </div>
  )
}