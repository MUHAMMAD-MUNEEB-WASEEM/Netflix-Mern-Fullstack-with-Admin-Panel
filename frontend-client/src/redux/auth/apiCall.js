import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from './authSlice';


const LoginApi = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export default LoginApi