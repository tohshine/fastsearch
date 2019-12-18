import { combineReducers } from 'redux';
import geoReducer from './geoReducer';
import authReducer from './authReducers';
import dataReducer from './dataReducers';
export default combineReducers({
  geoLocation: geoReducer,
  auth: authReducer,
  profile: dataReducer
});
