import axios from "axios";
import { getListsStart, getListsFailure, getListsSuccess, deleteListsStart, deleteListsSuccess, deleteListsFailure} from './listSlice';

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

//delete
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
      dispatch(deleteListsFailure(id));
    }
  };