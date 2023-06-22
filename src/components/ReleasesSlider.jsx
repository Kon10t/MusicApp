import React, { useEffect, useState, useRef } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import AdvisableSongs from '../components/AdvisableSongs.jsx'
import getRes from '../services/getRes'

const ReleasesSlider = () => {

  // React Hooks
  const [data, setData] = useState();
  const [slides, setSlides] = useState();
  const [slideOffset, setSlideOffset] = useState(0);
  const [slideWidth, setSlideWidth] = useState(null);

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

  // Prev Slide func
  const PrevSlide = () => {
    if (slideOffset >= 0 && slideOffset <= 100 && slideOffset !== 0) {
      setSlideOffset((prevOffset) => prevOffset - 20);
      console.log('Shift change!');
    }
  };

  // Next Slide func
  const NextSlide = () => {
    if (slideOffset >= 0 && slideOffset <= 100 && slideOffset !== 100) {
      setSlideOffset((prevOffset) => prevOffset + 20);
      console.log('Shift change!');
    }
  };

  return (
    <div className="flex flex-col">
      <div className="mb-10">
        <span className="font-quicksand font-semibold text-3xl text-light-white">New releases</span>
      </div>
      <div className='flex flex-row items-center mb-9'>
        <BsFillArrowLeftCircleFill
          onClick={PrevSlide}
          size={47}
          color="#FFF"
          className="cursor-pointer relative hover:opacity-50 active:opacity-30"
        />
        <div className="w-[200px] overflow-hidden">
          <div
            className="flex flex-row relative transition-transform duration-300"
            style={{ transform: `translateX(-${slideOffset}%)`, width: `${slides * 100}%` }}
          >
              {data?.map((elem, i) => (
                <AdvisableSongs
                  key={elem.id}
                  cover={elem.cover}
                  title={elem.title}
                  author={elem.author}
                  src={elem.src}
                />
              ))}
          </div>
        </div>
        <BsFillArrowRightCircleFill
          onClick={NextSlide}
          size={47}
          color="#FFF"
          className="cursor-pointer hover:opacity-50 active:opacity-30"
        />
      </div>
    </div>
  )
}

export default ReleasesSlider;
