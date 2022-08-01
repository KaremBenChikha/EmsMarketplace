import { loginFailure, loginStart, loginSuccess } from "./userRedux";
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
