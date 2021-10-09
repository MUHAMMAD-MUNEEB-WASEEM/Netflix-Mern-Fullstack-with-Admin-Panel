import axios from "axios";
import { getMoviesStart, getMoviesSuccess, getMoviesFailure, deleteMovieStart, deleteMovieSuccess, deleteMovieFailure, createMovieStart, createMovieSuccess, createMovieFailure, updateMovieStart, updateMovieSuccess, updateMovieFailure } from './movieSlice';


export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())
  axios.get('movies', {
      headers: {
          authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
      }
  })
  .then(response => {
     dispatch(getMoviesSuccess(response.data))
  })
  .catch(err => {
      dispatch(getMoviesFailure())
  })
};


export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
      await axios.delete("movies/" + id, {
        headers: {
          authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(deleteMovieSuccess(id));
    } catch (err) {
      dispatch(deleteMovieFailure());
    }
  };

//create movie
export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart())
    axios.post('movies', movie, {
        headers: {
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTZmNTExMmQ4Y2Y3NThhNmM0ZGJiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzc3MTU5NSwiZXhwIjoxNjY1MzA3NTk1fQ.D8NfuemZZNlEbUKC3I1s9NGEXGrT7YpR7EBFyzG8_FU" //+ JSON.parse(localStorage.getItem("user")).accessToken
        }
    })
    .then(response => {
      dispatch(createMovieSuccess(response.data))
    })
    .catch(err => {
        dispatch(createMovieFailure())
    })
};

export const updateMovie = async (movie, dispatch) => {
  dispatch(updateMovieStart())
  axios.put('movies', movie, {
      headers: {
          authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTZmNTExMmQ4Y2Y3NThhNmM0ZGJiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzc3MTU5NSwiZXhwIjoxNjY1MzA3NTk1fQ.D8NfuemZZNlEbUKC3I1s9NGEXGrT7YpR7EBFyzG8_FU" //+ JSON.parse(localStorage.getItem("user")).accessToken
      }
  })
  .then(response => {
    dispatch(updateMovieSuccess(response.data))
  })
  .catch(err => {
      dispatch(updateMovieFailure())
  })
};

