import { configureStore , combineReducers} from '@reduxjs/toolkit'

import  productSlice  from './futures/product'

import  cartSlice  from './futures/cart'
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

// import Cart from '../cart/page'
// import { products } from '../utils/mock'
// ...
const persisconfig  = {
  key :"root",
  version:1,
  storage,

}
const reducer =combineReducers({
  products :productSlice,
  Cart:cartSlice 
});

const persistedReducer =persistReducer(persisconfig,reducer)


export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false})
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch