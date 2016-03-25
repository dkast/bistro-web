import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const user = (state ={},
  action) => {
  return state;
}

const rootReducer = combineReducers({
  routing
});

export default rootReducer;
