import { useDispatch, useSelector } from 'react-redux';

import PlayPause from './PlayPause';
import { setActiveSong, playPause} from '../redux/playerSlice.js';

const TopChartCard = ({cover, title, author, src}) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const handlePlayClick = () => {
    dispatch(setActiveSong({ title, author, cover, src }))
    dispatch(playPause(true));
  }

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  return (
    <div className="flex flex-col xl:w-[717px] 2xl:w-[417px] mt-5 bg-opacity-80 cursor-pointer">
      <div className="relative flex flex-row w-full h-[135px] group p-5 bg-dark-alt rounded-xl">
        <div className="artist-card relative">
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <PlayPause
              isPlaying={isPlaying}
              activeSong={activeSong}
              title={title}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
          </div>
          <div className="artist_cover relative">
            <img src={cover} className="xl:w-[100px] 2xl:w-[90px]" alt="top-chart-pics" />
          </div>
        </div>
        <div className="px-3 font-quicksand font-medium xl:text-xl text-light-white">
          <p>{title}</p>
          <p>{author}</p>
        </div>
        <div className="font-quicksand font-medium xl:text-xl text-light-white">
          <p className="">heart</p>
        </div>
      </div>
    </div>
  )
}

const PlayTopCharts = () => {

  return (
    <>

    </>
  )
}

export default TopChartCard;