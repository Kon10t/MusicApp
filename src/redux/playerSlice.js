import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  isCanCurrentUpdate: false,
  activeSong: {},
  skipSong: [],
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload;

      console.log(`state.activeSong: ${JSON.stringify(state.activeSong)}, action.payload: ${JSON.stringify(action.payload)}`);
      // console.log(`state.activeSong.cover: ${JSON.stringify(state.activeSong.cover)}, action.payload.cover: ${JSON.stringify(action.payload.cover)}`);
      // console.log(`state.activeSong.src: ${JSON.stringify(state.activeSong.src)}, action.payload.src: ${JSON.stringify(action.payload.src)}`)

      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },

    setSkipSong: (state, action) => {
      state.skipSong = action.payload;
      // console.log(`state.skipSong: ${JSON.stringify(state.skipSong)}`);
    }
  }
});

export const { setActiveSong, setSkipSong, playPause, setCurrentIndex } = playerSlice.actions;

export default playerSlice.reducer;