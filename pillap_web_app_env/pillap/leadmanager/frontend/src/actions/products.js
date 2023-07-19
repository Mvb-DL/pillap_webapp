import { LOAD_PRODUCTS, LOADED_PRODUCTS, PRODUCT_ERROR} from "./types";
import axios from 'axios';

export const loadProducts = () => (dispatch) =>  {

    dispatch({ type: LOAD_PRODUCTS });

    axios
      .get('cart/display_product')
      .then((res) => {
        
          dispatch({
              type: LOADED_PRODUCTS,
              payload: res.data,
            });

      })

      .catch((err) => {
        
        dispatch(returnErrors(err.response.data, err.response.status));

        dispatch({
          type: PRODUCT_ERROR,
        });
        
      });
  };
