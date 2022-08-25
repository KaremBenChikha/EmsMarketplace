import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducers from "./cartRedux";
import cartReducer from "./reducers/CartReducers";
import userReducer from "./userRedux";
import { orderCreateReducer ,orderDetailsReducer,orderPayReducer,orderListMyReducer} from './reducers/OrderReducers';
import {productReviewCreateReducer ,productListReducer} from './reducers/productReducers'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { 
  userLoginReducer, 
} from './reducers/userReducers'
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
//cartItems
const cartItemsFromLocalStorage= localStorage.getItem("cartItems")
?JSON.parse(localStorage.getItem("cartItems"))
:[];

//shippingAddress
const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress')
? JSON.parse(localStorage.getItem('shippingAddress'))
:{};
//LOGIN
const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null

const initialState = {
  cart2:{
    cartItems:cartItemsFromLocalStorage,
    shippingAddress:shippingAddressFromLocalStorage
  },
  userLogin: { userInfo: userInfoFromStorage },
 }


const rootReducer = combineReducers({ 
  user: userReducer,
  userLogin: userLoginReducer, 
  productList: productListReducer,
  cart: cartReducers,
  cart2: cartReducer,
  productReviewCreate: productReviewCreateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  //orderPay: orderPayReducer,
  orderListMy: orderListMyReducer
 });


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(
  {
  initialState,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
