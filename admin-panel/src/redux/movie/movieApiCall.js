import axios from "axios";
import { getMoviesStart, getMoviesSuccess, getMoviesFailure, deleteMovieStart, deleteMovieSuccess, deleteMovieFailure, createMovieStart, createMovieSuccess, createMovieFailure } from './movieSlice';


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
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTZmNTExMmQ4Y2Y3NThhNmM0ZGJiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzI1MzcwNSwiZXhwIjoxNjMzMjU3MzA1fQ.X0AGFgLhfOmDzlHLXtdxIYl-mre78KiyjhOm9ucXYQs" //+ JSON.parse(localStorage.getItem("user")).accessToken
        }
    })
    .then(response => {
      dispatch(createMovieSuccess(response.data))
    })
    .catch(err => {
        dispatch(createMovieFailure())
    })
};
