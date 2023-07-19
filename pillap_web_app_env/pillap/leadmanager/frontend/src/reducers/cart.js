import { CART_ERROR, CREATE_CART, DELETE_CART, LOADING_CART, LOADED_CART } from '../actions/types';
import { saveProductInCart } from "../actions/cart"


const initialState = {
    numberCart: 0,
    cartItems: [],
    isLoading: false,
    totalAmount: 0,
    user: localStorage.getItem("user_id"),
  };


export default function (state = initialState, action) {

    switch (action.type) {

        case CREATE_CART:

            if(state.numberCart==0){

                let cart = {
                    
                    id:action.payload.id,
                    name:action.payload.name,
                    description: action.payload.description,
                    category: action.payload.category,
                    slug: action.payload.slug,
                    price: action.payload.price,
                    nft_uri: action.payload.nft_uri,
                    product_image_link: action.payload.product_image_link

                } 

                state.cartItems.push(cart); 

                //adds price of product to total amount
                state.totalAmount += action.payload.price

                const user = localStorage.getItem("user_id")

                saveProductInCart(cart, user);
                
            }

            else{

                let check = false;

                state.cartItems.map((item,key)=>{
                    if(item.id==action.payload.id){
                        state.cartItems[key].quantity++;
                        check=true;
                    }
                });

                if(!check){

                    let _cart = {

                        id:action.payload.id,
                        name:action.payload.name,
                        description: action.payload.description,
                        category: action.payload.category,
                        slug: action.payload.slug,
                        price: action.payload.price
                    }

                    state.cartItems.push(_cart);

                    //adds price of product to total amount
                    state.totalAmount += action.payload.price

                    const user = localStorage.getItem("user_id")

                    saveProductInCart(_cart, user);
                    
                }
            }

            return{
                ...state,
                numberCart:state.numberCart+1,
                isLoading: false,
                user: state.user
            }

        case DELETE_CART:

            let quantity_ = state.cartItems[action.payload].quantity;

            return{
                ...state,
                numberCart: state.numberCart - quantity_,
                Carts:state.cartItems.filter(item=>{
                    return item.id!=state.cartItems[action.payload].id
                })
               
            }

        case LOADING_CART:

            return{
                ...state,
                isLoading: true
            }

        case LOADED_CART:
    
            return{
                ...state,
                isLoading: false,
                cartItems: action.payload.cart_items, 
            }

        case CART_ERROR:

        return {
            ...state,
            isLoading: false,
          };

        default:
            return state;
    };

};