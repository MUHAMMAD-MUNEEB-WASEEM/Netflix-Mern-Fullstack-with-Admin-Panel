import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import movieReducer from './movie/movieSlice'


export const store = configureStore({
  reducer: {
    user: authReducer,
    movie: movieReducer,
  },
});