import { loginFailure, loginStart, loginSuccess,registerStart,registerSuccess,registerFailure } from "./userRedux";
import { publicRequest } from "../requestMethods";
import { userRequest } from "../requestMethods";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};
//ADD review
export const addReview = async (id,product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products/${id}/review`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
