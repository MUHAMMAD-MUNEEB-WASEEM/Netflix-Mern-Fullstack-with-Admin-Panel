import { createSlice } from '@reduxjs/toolkit';


export const movieSlice = createSlice({
  name: 'movie',
  initialState:{
    movies: [],
    isFetching: false,
    error: false
  },
  reducers: {

    //getting movies
    getMoviesStart: (state) => {
      state.movies = [];
      state.isFetching = true;
      state.error = false;
    },
    getMoviesSuccess: (state, action) => {
      state.movies = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    getMoviesFailure: (state) => {
      state.movies = [];
      state.isFetching = false;
      state.error = true;
    },

    //deleting movies

    deleteMovieStart: (state) => {
      state.movies = state.movies;
      state.isFetching = true;
      state.error = false;
    },
    deleteMovieSuccess: (state, action) => {
      state.movies = state.movies.filter((movie)=> movie._id !== action.payload);
      state.isFetching = false;
      state.error = false;
    },
    deleteMovieFailure: (state) => {
      state.movies = state.movies;
      state.isFetching = false;
      state.error = true;
    },

    //creating movie

    createMovieStart: (state) => {
      state.movies = state.movies;
      state.isFetching = true;
      state.error = false;
    },
    createMovieSuccess: (state, action) => {
      state.movies = [...state.movies, action.payload];//add one movie in all movies
      state.isFetching = false;
      state.error = false;
    },
    createMovieFailure: (state) => {
      state.movies = state.movies
      state.isFetching = false;
      state.error = true;
    },

    updateMovieStart: (state) => {
      state.movies = state.movies;
      state.isFetching = true;
      state.error = false;
    },
    updateMovieSuccess: (state, action) => {
      state.movies = state.movies.map(movie=> movie._id === action.payload._id && action.payload)//if movie id matches to our movie id, then it will be replace by action.payload which is movie
      state.isFetching = false;
      state.error = false;
    },
    updateMovieFailure: (state) => {
      state.movies = state.movies
      state.isFetching = false;
      state.error = true;
    },
  },
});




export const { getMoviesStart, getMoviesSuccess, getMoviesFailure, deleteMovieStart, deleteMovieSuccess, deleteMovieFailure, createMovieStart, createMovieSuccess, createMovieFailure, updateMovieStart, updateMovieSuccess, updateMovieFailure} = movieSlice.actions;

export default movieSlice.reducer;

//Below code is also of redux without actions, its actions is exported from movieAction.js file.
//In order to use below code, comment about above redux, then open use movieAction.js file and in movieApiCall, import actions from movieAction instead of from movieSlice
//The benefit of using above file is that it contains logic as well as actions, whereas below technique contains logic only and action are exported from movieAction.js

// const INITIAL_STATE = {
//   movies: [],
//   isFetching: false,
//   error: false,
// };

// const movieSlice = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "GET_MOVIES_START":
//       return {
//         movies: [],
//         isFetching: true,
//         error: false,
//       };
//     case "GET_MOVIES_SUCCESS":
//       return {
//         movies: action.payload,
//         isFetching: false,
//         error: false,
//       };
//     case "GET_MOVIES_FAILURE":
//       return {
//         movies: [],
//         isFetching: false,
//         error: true,
//       };
//     case "CREATE_MOVIE_START":
//       return {
//         ...state,
//         isFetching: true,
//         error: false,
//       };
//     case "CREATE_MOVIE_SUCCESS":
//       return {
//         movies: [...state.movies, action.payload],
//         isFetching: false,
//         error: false,
//       };
//     case "CREATE_MOVIE_FAILURE":
//       return {
//         ...state,
//         isFetching: false,
//         error: true,
//       };
//     case "UPLOAD_MOVIE_START":
//       return {
//         ...state,
//         isFetching: true,
//         error: false,
//       };
//     case "UPLOAD_MOVIE_SUCCESS":
//       return {
//         movies: state.movies.map(
//           (movie) => movie._id === action.payload._id && action.payload
//         ),
//         isFetching: false,
//         error: false,
//       };
//     case "UPLOAD_MOVIE_FAILURE":
//       return {
//         ...state,
//         isFetching: false,
//         error: true,
//       };
//     case "DELETE_MOVIE_START":
//       return {
//         ...state,
//         isFetching: true,
//         error: false,
//       };
//     case "DELETE_MOVIE_SUCCESS":
//       return {
//         movies: state.movies.filter((movie) => movie._id !== action.payload),
//         isFetching: false,
//         error: false,
//       };
//     case "DELETE_MOVIE_FAILURE":
//       return {
//         ...state,
//         isFetching: false,
//         error: true,
//       };
//     default:
//       return { ...state };
//   }
// };

// export default movieSlice;