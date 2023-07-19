import { combineReducers } from 'redux';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import update_data from "./update_data"
import cart from "./cart"
import products from './products';

export default combineReducers({
  errors,
  messages,
  auth,
  update_data,
  cart,
  products
});
