import axios from "axios";
import { updateMovieStart } from "../movie/movieSlice";
import { getListsStart, getListsFailure, getListsSuccess, deleteListsStart, deleteListsSuccess, deleteListsFailure, createListStart, createListSuccess, createListFailure, updateListStart, updateListSuccess, updateListFailure} from './listSlice';

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

export const updateList = async (list, dispatch) => {
    dispatch(updateListStart())
    axios.put('lists', list, {
        headers: {
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTZmNTExMmQ4Y2Y3NThhNmM0ZGJiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzI1MzcwNSwiZXhwIjoxNjMzMjU3MzA1fQ.X0AGFgLhfOmDzlHLXtdxIYl-mre78KiyjhOm9ucXYQs" //+ JSON.parse(localStorage.getItem("user")).accessToken
        }
    })
    .then(response => {
      dispatch(updateListStart(response.data))
    })
    .catch(err => {
        dispatch(updateListFailure())
    })
  };
