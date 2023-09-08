import React, {useRef, useEffect, useState } from 'react';

const AdvisableSongs = ({ cover, title, author, src }) => {

  //hooks
  const slideImageRef = useRef();

  // const getWidth = () => {
  //   const computedStyle = slideImageRef.current.getBoundingClientRect().width;
  //   console.log(computedStyle);
  //   return computedStyle;
  // }

  return (
      <div ref={slideImageRef} className="slide-image mx-3">
        <div className="w-[200px]">
          <img src={cover} className="rounded-3xl m-w-none" alt="AdvisableSongs" />
        </div>
        <div className="font-quicksand font-normal pt-1">
          <p className="text-sm text-light-white">{title}</p>
          <p className="text-xs text-gray-500">{author}</p>
        </div>
      </div>
  )
  }
// const AdvisableSongs = ( { cover, title, author, src } ) => {

//   return (
//     <div className="slide-image mx-3">
//       <div className="w-[200px]">
//         <img src={cover} className="rounded-3xl m-w-none" alt="AdvisableSongs" />
//       </div>
//       <div className="font-quicksand font-normal pt-1">
//           <p className="text-sm text-light-white">{title}</p>
//           <p className="text-xs text-gray-500">{author}</p>
//         </div>
//     </div>
//   )
// }

export default AdvisableSongs;