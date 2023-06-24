import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  isCanCurrentUpdate: false,
  activeSong: {},
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong.title = action.payload.title;
      state.activeSong.cover = action.payload.cover;
      state.activeSong.src = action.payload.src;

      console.log(`state.activeSong.title: ${JSON.stringify(state.activeSong.title)}, action.payload.title: ${JSON.stringify(action.payload.title)}`);
      console.log(`state.activeSong.title: ${JSON.stringify(state.activeSong.cover)}, action.payload.title: ${JSON.stringify(action.payload.cover)}`);
      console.log(`state.activeSong.src: ${JSON.stringify(state.activeSong.src)}, action.payload.src: ${JSON.stringify(action.payload.src)}`)

      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    currentUpdate: (state, action) => {
      state.isCanCurrentUpdate = action.payload;
    }
  }
});

export const { setActiveSong, playPause} = playerSlice.actions;

export default playerSlice.reducer;