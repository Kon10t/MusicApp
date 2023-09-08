import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

export default function ControlsTrack({cover}) {
  const [isLike, setIsLike] = useState(false);

  function handleLike() {
    if (isLike) {
      setIsLike(false)
    } else {
      setIsLike(true);
    }
  }

  return (
    <div className="flex flex-row items-center">
      <div>
        <img src={cover} alt="Music_Player-Cover" />
      </div>
      <div onClick={handleLike} className="cursor-pointer">
        {isLike ? (
            <BsHeartFill
              size={30}
            />
        ) : (
            <BsHeart
              size={20}
            />
        )}
      </div>
    </div>
  )
};