import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, title, handlePause, handlePlay }) => ( isPlaying && activeSong?.title === title ? (
    <FaPauseCircle 
      size={35}
      color="#c0c0c0"
      className="hover:opacity-80 active:opacity-50"
      onClick={handlePause}
    />
) : (
    <FaPlayCircle
      size={35}
      color="#c0c0c0"
      className="hover:opacity-80 active:opacity-50"
      onClick={handlePlay}
    />
) )

export default PlayPause