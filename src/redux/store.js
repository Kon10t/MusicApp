import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './playerSlice.js';

export const store = configureStore({
  reducer: {
    player: playerReducer,
  }
})