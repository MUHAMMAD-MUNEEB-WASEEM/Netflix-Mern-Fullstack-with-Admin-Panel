import axios from "axios";
import { getListsStart, getListsFailure, getListsSuccess, deleteListsStart, deleteListsSuccess, deleteListsFailure, createListStart, createListSuccess, createListFailure} from './listSlice';

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
    dispatch(deleteListsStart());
    try {
      await axios.delete("lists/" + id, {
        headers: {
          authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(deleteListsSuccess(id));
    } catch (err) {
      dispatch(deleteListsFailure());
    }
  };

//create movie
export const createList = async (list, dispatch) => {
    dispatch(createListStart())
    axios.post('lists', list, {
        headers: {
            authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
    })
    .then(response => {
      dispatch(createListSuccess(response.data))
    })
    .catch(err => {
        dispatch(createListFailure())
    })
};
