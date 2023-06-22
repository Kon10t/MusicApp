import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import Home from './pages/Home.jsx';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProgressBar from './components/progressBar/progressBar.js';
// import Playback from './components/Playback/Playback.js';
// import axios from 'axios';

// // import Audios from "./pages/Audios.js";
// // import Add from "./pages/Add.js";
// // import Update from "./pages/Update.js";

import './index.css';

// // song
// import sound from './songs/OG_Buda-Бандит.mp3';

// import { createStore } from 'redux';

// // function App() {
// //   return (
// //     <div className="App">
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path="/" element={<Audios/>}/>
// //           <Route path="/add" element={<Add/>}/>
// //           <Route path="/update/:id" element={<Update/>}/>
// //         </Routes>
// //       </BrowserRouter>
// //     </div>
// //   )
// // }

// function AudioPlayer() {

//   // song
//   const [currentElementIndex, setCurrentElementIndex] = useState(0);

//   const timerRef = useRef(null);

//   // ProgressionEvent - idk how it workin`

//   // VolumeChange event

//   function handleVolumeChange(e) {
//     const value = e.target.value / 100;
//     setVolume(value);
//     audioRef.current.volume = value;
//   }

//   useEffect(() => {

//     const updateProgressBar = () => {
//       const audio = audioRef.current;
//       const progress = progressBarRef.current;
  
//       if (audio && progress) {
//         const width = (audio.currentTime / audio.duration) * 100;
//         progress.style.width = `${width}%`;
//       }
//     };
  
//     const interval = setInterval(updateProgressBar, 1000);
  
//     return () => {
//       clearInterval(interval);
//     };
//   }, [audioRef.current.currentTime]);


//   return (
//     <>
//       <Playback/>

//       <input type="range" min="0" max="100" value={volume * 100} onChange={handleVolumeChange} />
//       <ProgressBar maxValue={audioRef.current.duration} audioRef={audioRef} progressBarRef={progressBarRef}/>
//     </>
//   );
// }

///

// const reducer = (state = 0, action) => {
//     switch (action.type) {
//       case 'INC':
//         return state + 1;
//       case 'DEC':
//         return state - 1;
//       case 'RND':
//         return state + action.value;
//       default:
//         return state;
//     }
// }

// const inc = () => ({type: 'INC'});
// const dec = () => ({type: 'DEC'});
// const rnd = (value) => ({type: 'RND', value});

// const store = createStore(reducer);

// document.getElementById('inc').addEventListener('click', () => {
//   store.dispatch(inc());
// });

// document.getElementById('dec').addEventListener('click', () => {
//   store.dispatch(dec());
// });

// document.getElementById('rnd').addEventListener('click', () => {
//   const value = Math.floor(Math.random() * 10);
//   store.dispatch(rnd(value));
// });

// const update = () => {
//   document.getElementById('counter').textContent = store.getState();
// }
// store.subscribe(update);

// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});












///

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      {/* <AudioPlayer /> */}
      <Home />
    </Provider>
);
