import { createStore, combineReducers, applyMiddleware } from 'redux'
 import thunk from 'redux-thunk'
 import cartReducer from "./redux/cartRedux";
 import userReducer from "./redux/userRedux";
 import { orderCreateReducer } from './reducers/OrderReducers';
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
 import { composeWithDevTools } from 'redux-devtools-extension'
 import { productListReducer, productDetailsReducer, productReviewCreateReducer } from './reducers/productReducers'
 import { 
  userLoginReducer, 
  userRegisterReducer,
  userDetailsReducer,
} from './reducers/userReducers'

import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };
 const reducer = combineReducers({
   productList: productListReducer,
   productDetails: productDetailsReducer,
   userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   userDetails: userDetailsReducer,
   productReviewCreate: productReviewCreateReducer,
   orderCreate: orderCreateReducer,
   
 })

 const userInfoFromStorage = localStorage.getItem('userInfo')
   ? JSON.parse(localStorage.getItem('userInfo'))
   : null
//-------------------
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);
//-------------

 const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
 }

 const middleware = [thunk]

 const store = createStore(
   reducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
 )

 export default store