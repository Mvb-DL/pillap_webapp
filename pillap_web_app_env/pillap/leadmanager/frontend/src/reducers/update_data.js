import {
    USER_UPDATE,
    USER_DELETE,
  } from '../actions/types';

  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {

      case USER_UPDATE:
        return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        };
        
        case USER_DELETE:
          return {
            ...state,
            isAuthenticated: true,
            isLoading: false,
            user: action.payload,
          };
        default:
            return state;
        }
      }
      