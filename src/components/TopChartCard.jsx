import { useDispatch, useSelector } from 'react-redux';

import PlayPause from './PlayPause';
import { setActiveSong, setTopChartsArr, setCurrentIndex, playPause} from '../redux/playerSlice.js';

const TopChartCard = ({ index, hui, elem }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, TopCharts, currentIndex } = useSelector((state) => state.player);

  const handlePlayClick = () => {
    dispatch(setActiveSong(elem));
    // dispatch(setActiveSong({ title, author, cover, src }));
    // hui - массив эл. TopCharts
    dispatch(setTopChartsArr(hui));
    dispatch(setCurrentIndex(index));
    dispatch(playPause(true));
  }

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }
  // gnk
  // console.log(`hui: ${JSON.stringify(hui)}`);

  return (
    <div className="flex flex-col 3xl:w-[417px] xl:w-[317px] mt-5 bg-opacity-80 cursor-pointer">
      <div className="relative flex flex-row w-full 3xl:h-[95px] 2.5xl:h-[95px] 2xl:h-[85px] group p-4 bg-dark-alt rounded-xl">
        <div className="artist-card relative">
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <PlayPause
              isPlaying={isPlaying}
              activeSong={activeSong}
              title={elem.title}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
          </div>
          <div className="artist_cover relative">
            <img src={elem.cover} className="3xl:w-[63px] 2.5xl:w-[63px] 2xl:w-[53px]" alt="top-chart-pics" />
          </div>
        </div>
        <div className="px-3 font-quicksand text-light-white">
          <div>
            <p className='text-base text-zinc-400'>{elem.title}</p>
          </div>
          <div>
            <p className='text-xs font-normal text-zinc-600'>{elem.author}</p>
          </div>
        </div>
        <div className="font-quicksand font-medium xl:text-xl text-light-white">
          <p className="">heart</p>
        </div>
      </div>
    </div>
  )
}

export default TopChartCard;