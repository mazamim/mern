import { createSlice} from '@reduxjs/toolkit'
export const productSlice = createSlice({
    name: 'product',
    initialState: {
      product: [],
      loading:false,
      error:null
    },
    reducers: {
      productListRequest: state => {
 
        state.loading=true
        state.product=[]
      },
      productListSuccess: (state,action) => {
 
        state.loading=false
        state.product=action.payload

      },
      productListError: (state,action) => {
 
        state.loading=false
        state.error=action.payload
      },
   
      
    }
  })