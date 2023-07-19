import { LOAD_PRODUCTS, LOADED_PRODUCTS, PRODUCT_ERROR} from "../actions/types"


const initialState = {
    products: [],
    isLoading: false,
};

export default function (state = initialState, action) {

    switch (action.type) {

        case LOAD_PRODUCTS:
            return {
              ...state,
              isLoading: true,
            };

        case LOADED_PRODUCTS: 

            localStorage.setItem("products", JSON.stringify(action.payload));
            
            return{
                ...state,
                products: action.payload,
                isLoading: false,
            };

        case PRODUCT_ERROR:
            return {
              ...state,
              isLoading: false,
            };

        default:
            return state;
        }

}