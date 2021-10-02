import axios from "axios";
import { getMoviesStart, getMoviesSuccess, getMoviesFailure, deleteMovieStart, deleteMovieSuccess, deleteMovieFailure } from './movieSlice';


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