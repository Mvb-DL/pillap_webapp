import { CREATE_CART, DELETE_CART, CART_ERROR, LOADED_CART, LOADING_CART} from "./types";
import axios from 'axios';
import { returnErrors } from './messages';


export function get_user_cart(cart_data){

  let user = localStorage.getItem("user_id")

  const user_id = +user

  const user_cart = []

  for (let i = 0; i < cart_data.cart_items.length; i++) {
    if (cart_data.cart_items[i].cart.user.id === user_id){
        user_cart.push(cart_data.cart_items[i].product)
    }
  }

  return user_cart

}

export function CreateCart(payload){

    return {
        type: CREATE_CART,
        payload
    }
}

export function DeleteCart(payload){
  
  return{
      type: DELETE_CART,
      payload
  }
}


export function saveProductInCart(product, user) {

  // Headers
  const config = {

    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ product, user });

  axios

    .post('cart/add_product_to_cart', body, config)

    .then((res) => {

      return{
        type: CREATE_CART,
        payload: res.data,
      };


    })

    .catch((err) => {

      returnErrors(err.response.data, err.response.status);

      return{
        type: CART_ERROR,
      };

    });
};



export const loadCart = () => (dispatch) => {

  axios

    .get('cart/display_cart')

    .then((res) => {

      let user_cart = get_user_cart(res.data);

      const cart_data = {"cart_items" : user_cart}
      
      dispatch({

        type: LOADED_CART,
        payload: cart_data,

          });

    })

    .catch((err) => {

      dispatch(returnErrors(err.response.data, err.response.status));

      dispatch({

        type: CART_ERROR,

      });
      
    });
};
