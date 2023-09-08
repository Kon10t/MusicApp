import React, { useEffect, useState, useRef, useContext } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import AdvisableSongs from './AdvisableSongs.jsx'
import getRes from '../services/getRes.js'

const ReleasesSlider = () => {

  // React Hooks
  const [data, setData] = useState();
  const [slides, setSlides] = useState();
  const [slideOffset, setSlideOffset] = useState(0);
  const [slideWidth, setSlideWidth] = useState(null);

  const slideRef = useRef();

  // Get Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const releaseData = await getRes('http://localhost:3000/AdvisableSongs');
        setData(releaseData);
        setSlides(releaseData.length);
        console.log(`releaseData: ${JSON.stringify(releaseData)}`);
        console.log(`releaseData.length: ${slides}`);

      } catch (error) {
        console.log('Error:', error);
      }
    };
      fetchData();
  }, []);

  // Prev Slide func
  const PrevSlide = () => {
    if (slideOffset >= 0 && slideOffset <= 100 && slideOffset !== 0) {
      setSlideOffset((prevOffset) => prevOffset - 200);
      console.log('Shift change!');
    }
  };
  console.log(slideRef.current)
  // Next Slide func
  const NextSlide = () => {
    if (slideOffset >= 0 && slideOffset <= slideRef.current.width && slideOffset !== slideRef.current.width) {
      setSlideOffset((prevOffset) => prevOffset + (slideRef.current.width / slides));
      console.log('Shift change!');
    }
  };

  return (
    <div className="flex flex-col">
      <div className="mb-10">
        <span className="font-quicksand font-semibold text-2xl text-light-white">New releases</span>
      </div>
      <div className='flex flex-row items-center mb-9'>
        <BsFillArrowLeftCircleFill
          onClick={PrevSlide}
          size={47}
          color="#FFF"
          className="cursor-pointer relative hover:opacity-50 active:opacity-30"
        />
        <div className={`w-[200px] overflow-hidden`} >
          <div
            ref={slideRef}
            className="flex flex-row relative transition-transform duration-300"
            style={{ transform: `translateX(-${0}%)` }}
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
