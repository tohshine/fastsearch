import {
  ADDPROFILE,
  EDITPROFILE,
  PROFILE_ERROR,
  CLEAR_ERRORS,
  GET_PROFILE,
  GET_ALL_ENT,
  GET_ENT_DETAILS,
  CLEAR_ENT_DETAILS,
  FILTER,
  CLEAR_FILTER,
  SET_PROFILE_LOADING
} from './types';
import axios from 'axios';
import { FILE } from 'dns';

export const setLoading = ()=>{
return{
  type:SET_PROFILE_LOADING
}
}
export const addProfile = formData => async dispatch => {
  try {
    const res = await axios.post('/account', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    dispatch({
      type: ADDPROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.response.data
    });
  }
};

export const getProfile = () => async dispatch => {
  try {
    const res = await axios.get('/account');
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.response.data
    });
  }
};
export const editProfile = (id, editedProfile) => async dispatch => {
  const config = {
    'content-Type': 'application/json'
  };
  try {
    const res = await axios.put(`/account/${id}`, editedProfile, config);
    dispatch({
      type: EDITPROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.response.data
    });
  }
};

//?client part
export const getAllEnt = () => async dispatch => {
  try {
    const res = await axios.get('/search');
   

    if (res.data === undefined) return;
    dispatch({
      type: GET_ALL_ENT,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.response.data
    });
  }
};

export const getByCategory = category => async dispatch => {
  try {
    const res = await axios.post('/search', category);
    dispatch({
      type: GET_ALL_ENT,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.response.data
    });
  }
};

export const filterCompany = filterinput => dispatch => {
  dispatch({
    type: FILTER,
    payload: filterinput
  });
};

export const ClearFilter = () => {
  return {
    type: CLEAR_FILTER
  };
};

export const getEntDetails = id => async dispatch => {
  try {
    const res = await axios.get(`/search/profile/${id}`);
    dispatch({
      type: GET_ENT_DETAILS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.response.data
    });
  }
};

export const ClearEntDeatils = () => {
  return {
    type: CLEAR_ENT_DETAILS
  };
};
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
