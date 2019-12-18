import {
  SETLOADING,
  LOGIN,
  AUTHERROR,
  CLEAR_ERRORS,
  LOADUSER,
  LOGOUT,
  REGISTER
} from './types';
import axios from 'axios';
import setAuth from '../util/setAuth';

export const setLoading = () => {
  return {
    type: SETLOADING
  };
};
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const loadUser = () => async dispatch => {
  //?loading token to axios global header
  if (localStorage.token) {
    setAuth(localStorage.token);
  }

  //setLoading();
  try {
    const res = await axios.get('/auth');
    dispatch({
      type: LOADUSER,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTHERROR
    });
  }
};

export const login = loginForm => async dispatch => {
  const config = {
    'content-Type': 'application/json'
  };
  try {
    const res = await axios.post('/auth', loginForm, config);
    dispatch({
      type: LOGIN,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTHERROR,
      payload: error.response.data.msg
    });
  }
};

export const register = registerForm => async dispatch => {
  const config = {
    'content-Type': 'application/json'
  };
  try {
    const res = await axios.post('/create_account', registerForm, config);
    dispatch({
      type: REGISTER,
      payload: res.data
    });
  } catch (error) {
   
    
    dispatch({
      type: AUTHERROR,
      payload: error.response.data
    });
  }
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};
