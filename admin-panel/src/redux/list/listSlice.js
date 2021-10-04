
import { createSlice } from '@reduxjs/toolkit';


export const listSlice = createSlice({
  name: 'list',
  initialState:{
    lists: [],
    isFetching: false,
    error: false
  },
  reducers: {

    //getting movies
    getListsStart: (state) => {
      state.lists = [];
      state.isFetching = true;
      state.error = false;
    },
    getListsSuccess: (state, action) => {
      state.lists = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    getListsFailure: (state) => {
      state.lists = [];
      state.isFetching = false;
      state.error = true;
    },

    //deleting lists

    deleteListsStart: (state) => {
      state.lists = state.lists;
      state.isFetching = true;
      state.error = false;
    },
    deleteListsSuccess: (state, action) => {
      state.lists = state.lists.filter((list)=> list._id !== action.payload);
      state.isFetching = false;
      state.error = false;
    },
    deleteListsFailure: (state) => {
      state.lists = state.lists;
      state.isFetching = false;
      state.error = true;
    },

    // //creating movie

    // createMovieStart: (state) => {
    //   state.movies = state.movies;
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // createMovieSuccess: (state, action) => {
    //   state.movies = [...state.movies, action.payload];//add one movie in all movies
    //   state.isFetching = false;
    //   state.error = false;
    // },
    // createMovieFailure: (state) => {
    //   state.movies = state.movies
    //   state.isFetching = false;
    //   state.error = true;
    // },

    // updateMovieStart: (state) => {
    //   state.movies = state.movies;
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // updateMovieSuccess: (state, action) => {
    //   state.movies = state.movies.map(movie=> movie._id === action.payload._id && action.payload)//if movie id matches to our movie id, then it will be replace by action.payload which is movie
    //   state.isFetching = false;
    //   state.error = false;
    // },
    // updateMovieFailure: (state) => {
    //   state.movies = state.movies
    //   state.isFetching = false;
    //   state.error = true;
    // },
  },
});




export const { getListsStart, getListsSuccess, getListsFailure, deleteListsStart, deleteListsSuccess, deleteListsFailure} = listSlice.actions;

export default listSlice.reducer;
