import axios from 'axios'
import {
    ORDER_CREATE_RESET,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
  } from '../constants/orderConstants'
  import { logout  } from './userActions';
  import { useSelector } from "react-redux";
  
//CREATE ORDER
export const createOrder = (order) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_CREATE_REQUEST,
      })
  
      /*const {
        userLogin: { user },
      } = getState();

      const user = JSON.parse(localStorage.getItem('User'));
      //const token = user.token;*/
      
      
      const token = window.localStorage.getItem("currentUser")
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
      //const user = useSelector((state) => state.user.currentUser);
  
      const { data } = await axios.post(`http://localhost:5000/api/orders`, order, config)
  
      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      })
      localStorage.removeItem("cartItems")
    } catch (error) {
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        if(message == "Not authorizes , token failed") {
            dispatch(logout());
        }
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload: message,
      });
    }
};