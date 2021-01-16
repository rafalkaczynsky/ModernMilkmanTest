import {combineReducers} from 'redux';
import stockReducer from '../modules/stock';
import userReducer from '../modules/user';

const appReducer = combineReducers({
  stock: stockReducer,
  user: userReducer
  //...
});

export default appReducer;