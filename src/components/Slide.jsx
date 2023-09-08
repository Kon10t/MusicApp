import React from "react";
import SlideImage from "./SlideImage";
import SlideTitle from "./SlideTitle";

const Slide = ({ data: { cover, title, author } }) => {
  return (
    <div className="relative mr-8">
      <SlideImage src={cover} alt={title} />
      <SlideTitle title={title} author={author} />
    </div>
  )
}

export default Slide;