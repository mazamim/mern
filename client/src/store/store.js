import {configureStore } from '@reduxjs/toolkit'

//slices or reducers

import {authSlice} from './reducers/authReducers'
import {productSlice} from './reducers/productReducer'


 

  export const authActions= authSlice.actions
  export const productAction = productSlice.actions

 export const store = configureStore({
    reducer: {auth:authSlice.reducer,product:productSlice.reducer}
  })