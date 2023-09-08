import React from "react";

export default function SlideTitle({ title, author }) {
  return (
    <div className="font-quicksand font-normal pt-1">
      <p className="text-sm text-light-white">{title}</p>
      <p className="text-xs text-gray-500">{author}</p>
    </div>
  )
}