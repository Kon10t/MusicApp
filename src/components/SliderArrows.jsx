import React from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

export default function Arrows({ changeSlide }) {
  
  return (
    <div className="absolute z-10">
      <BsFillArrowLeftCircleFill
        onClick={() => changeSlide(-1)}
        size={47}
        color="#FFF"
        className="relative right-9 top-20 cursor-pointer opacity-80 hover:opacity-50 active:opacity-30"
      />
      <BsFillArrowRightCircleFill
        onClick={() => changeSlide(1)}
        size={47}
        color="#FFF"
        className="relative left-48 top-8 cursor-pointer opacity-80 hover:opacity-50 active:opacity-30"
      />
    </div>
  )
}
