import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TopChartCard, Sidebar, PlaylistSlider, SearchBar, SongCard } from '../components';

import getRes from '../services/getRes'
import MusicPlayer from '../components/MusicPlayer/MusicPlayer.jsx';
import ReleasesSlider from '../components/ReleasesSlider.jsx';
import Slider from '../components/Slider';

const Home = () => {

  // React Hooks
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state) => state.player);

  const [chartData, setChartData] = useState([]);
  const [screenMinWidth, setScreenMinWidth] = useState(983);

  // getData
  useEffect(() => {
    const fetchData = async () => {
        try {
        const data = await getRes('http://localhost:3000/TopCharts');
        console.log(data);
        setChartData(data);
        } catch (error) {
        console.log('Error:', error);
        }
    };
      fetchData();
  }, []);

  // console.log(`chartData: ${JSON.stringify(chartData)}`);
  // xl: 2xl: 2.5xl:mx-24 3xl:mx-44
  return (
    <div className="m-auto absolute left-0 right-0 top-0 bottom-0 3xl:w-[80%] 2.5xl:w-[85%] 2xl:w-[90%] xl:w-[100%]">
      <div className="bg-light-ink-black h-[2000px] m-auto flex flex-row">
        <Sidebar />
        <div className="right w-[100%] mx-8">
          <SearchBar />
          <div className="wrapper flex flex-wrap my-9"> 
            <PlaylistSlider />
            <div className="inner h-auto flex flex-col m-auto px-16">
              <span className="font-quicksand font-semibold text-2xl text-light-white">Top charts</span>
              {chartData.map((elem, index, hui) => (
                <TopChartCard
                  key={elem.id}
                  index={index}
                  elem={elem}
                  hui={hui}
                />
              ))
              }
            </div>
          </div>
          <Slider />
        </div>
        <MusicPlayer />
      </div>
    </div>
  )
}

export default Home;