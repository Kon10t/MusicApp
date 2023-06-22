import { useDispatch } from 'react-redux';

import Audio from './MusicPlayer/audioPlayer/MusicPlayer'
import PlayPause from './PlayPause.jsx';
import { playPause, setActiveSong } from '../redux/playerSlice.js';

const SongCard = ({cover, title, author}) => {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(playPause(true))
  }

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  return (
    <div className="flex flex-row" >
    
    <div>
        <PlayPause handlePause={() => handlePauseClick} handlePlay={() => handlePlayClick} />
        <img src={cover} alt="image" />
    </div>
    <div className="px-3">
        <p>{title}</p>
        <p>{author}</p>
    </div>
        <p className="">heart</p>
    </div>
  )
}

export default SongCard;
