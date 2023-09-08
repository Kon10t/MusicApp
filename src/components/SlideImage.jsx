import React from "react";

export default function SlideImage({ src, alt }) {
  return <img src={src} alt={alt} className="rounded-3xl max-w-none"/>
}