import {
  SETLOADING,
  LOGIN,
  REGISTER,
  AUTHERROR,
  CLEAR_ERRORS,
  LOADUSER,
  LOGOUT
} from '../action/types';
import localStorage from 'redux-persist/es/storage';
const initialState = {
  token: localStorage.getItem('token'),
  error: null,
  loading: false,
  isAuth: false,
  user: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETLOADING:
      return {
        ...state,
        loading: true
      };

    case LOADUSER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        isAuth: true,
        error: null
      };
    case REGISTER:
    case LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        loading: false,
        isAuth: true,
        ...action.payload
      };

    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        loading: false,
        isAuth: false,
        token: null,
        user: null
      };

    case AUTHERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        loading: false,
        token: null,
        isAuth: false,
        error: action.payload,
        user: null
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
export default authReducer;
