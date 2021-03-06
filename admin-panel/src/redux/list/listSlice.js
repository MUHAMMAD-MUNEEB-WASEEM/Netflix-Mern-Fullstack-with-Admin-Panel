
import { createSlice } from '@reduxjs/toolkit';


export const listSlice = createSlice({
  name: 'list',
  initialState:{
    lists: [],
    isFetching: false,
    error: false
  },
  reducers: {

    //getting lists
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

    //creating movie

    createListStart: (state) => {
      state.lists = state.lists;
      state.isFetching = true;
      state.error = false;
    },
    createListSuccess: (state, action) => {
      state.lists = [...state.lists, action.payload];//add one movie in all lists
      state.isFetching = false;
      state.error = false;
    },
    createListFailure: (state) => {
      state.lists = state.lists
      state.isFetching = false;
      state.error = true;
    },

    updateListStart: (state) => {
      state.lists = state.lists;
      state.isFetching = true;
      state.error = false;
    },
    updateListSuccess: (state, action) => {
      state.lists = state.lists.map(list=> list._id === action.payload._id && action.payload)//if movie id matches to our movie id, then it will be replace by action.payload which is movie
      state.isFetching = false;
      state.error = false;
    },
    updateListFailure: (state) => {
      state.lists = state.lists
      state.isFetching = false;
      state.error = true;
    },
  },
});




export const { getListsStart, getListsSuccess, getListsFailure, deleteListsStart, deleteListsSuccess, deleteListsFailure, createListStart, createListSuccess, createListFailure, updateListStart, updateListFailure, updateListSuccess } = listSlice.actions;

export default listSlice.reducer;
