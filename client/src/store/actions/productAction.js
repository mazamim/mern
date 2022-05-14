
import axios from 'axios'
import { productAction } from "../store";

export const productActionCreator = () => {
  return async (dispatch) => {
    dispatch(productAction.productListRequest());
    try {
      
      const response=await axios.get('http://localhost:5000/api/products')
   
          dispatch(productAction.productListSuccess(response.data))
    
    } catch (error) {
        dispatch(productAction.productListError(error));
    }
  };
};
