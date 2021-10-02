import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'user',
  initialState:{
    movies: [],
    isFetching: false,
    error: false
  },
  reducers: {
    getMoviesStart: (state) => {
      state.user = null;
      state.isFetching = true;
      state.error = false;
    },
    getMoviesSuccess: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    getMoviesFailure: (state) => {
      state.user = null;
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.user = null;
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout} = movieSlice.actions;

export default movieSlice.reducer;