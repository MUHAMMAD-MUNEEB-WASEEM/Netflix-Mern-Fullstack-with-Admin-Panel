import axios from "axios";
import { getListsStart, getListsFailure, getListsSuccess, deleteListsStart, deleteListsSuccess, deleteListsFailure} from './listSliceSlice';

export const getLists = async (dispatch) => {
    dispatch(getListsStart())
    axios.get('lists', {
        headers: {
            authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
        }
    })
    .then(response => {
        dispatch(getListsSuccess(response.data))
    })
    .catch(err => {
        dispatch(getListsFailure())
    })
};

export const deleteList = async (id, dispatch) => {
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