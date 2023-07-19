import axios from 'axios';
import { returnErrors } from './messages';
import {
    AUTH_ERROR,
    USER_UPDATE,
    USER_DELETE
  } from '../actions/types';


export const updateUserData = (username, password, email) => (dispatch, getState) => {

  // Request Body
  const body = JSON.stringify({ username, password, email });

//Make POST request with Body to Django Serializer
  axios
    .post('api/auth/update_user_data', body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_UPDATE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });

};


// deletes the user
export const deleteUserData = (username, password, email) => (dispatch, getState) => {

  // Request Body
  const body = JSON.stringify({ username, password, email });

  axios
    .post('api/auth/delete_user_data', body, tokenConfig(getState))

    .then((res) => {
      dispatch({
        type: USER_DELETE,
        payload: res.data,
      });

    })

    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });

};



export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};
