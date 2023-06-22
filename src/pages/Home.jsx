import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TopChartCard, Sidebar, PlaylistSlider, SearchBar, SongCard } from '../components';

import getRes from '../services/getRes'
import MusicPlayer from '../components/MusicPlayer/audioPlayer/MusicPlayer.jsx';
import ReleasesSlider from '../components/ReleasesSlider.jsx';

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
        setChartData(data);
        } catch (error) {
        console.log('Error:', error);
        }
    };
      fetchData();
  }, []);

  return (
    <div className="bg-light-ink-black h-auto flex flex-row" style={{ minHeight: `${screenMinWidth}px` }}>
      <div className="left mx-5">
        <Sidebar />
      </div>
      <div className="right ml-3">
        <SearchBar />
        <div className="wrapper flex flex-wrap my-9"> 
          <PlaylistSlider />
          <div className="inner h-auto flex flex-col flex-wrap sm:justify-start justify-center px-16">
            <span className="font-quicksand font-medium text-4xl text-light-white">Top charts</span>
              {chartData.map((elem, i) => (
                <TopChartCard
                  key={elem.id}
                  cover={elem.cover}
                  title={elem.title}
                  author={elem.author}
                  src={elem.src}
                />
              ))
              }
          </div>
        </div>
        <ReleasesSlider />
        <ReleasesSlider />
      </div>
        <MusicPlayer />
    </div>
  )
}

export default Home;