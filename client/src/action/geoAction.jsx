import {
  GEO_SEARCH,
  ERRORS,
  CLEAR_ERRORS,
  SETLOADING,
  GEO_STATE
} from './types';
import axios from 'axios';

const SetLoading = () => {
  return {
    type: SETLOADING
  };
};

export const GetLocation = input => async dispatch => {
  try {
    SetLoading();

    const res = await axios.get(
      'https://cors-anywhere.herokuapp.com/' +
        'https://maps.googleapis.com/maps/api/geocode/json',
      {
        params: {
          address: input,
          key: 'AIzaSyCmSs5Pb8Vd1AitYZlQDxGiE9_2IM0dVWY'
        }
      }
    );
    if (res.data === undefined) throw new Error();
    console.log(res.data);

    dispatch({
      type: GEO_SEARCH,
      payload: res.data.results[0]
    });
  } catch (error) {
    dispatch({
      type: ERRORS,
      payload: error.response.data
    });
  }
};

export const GetState = () => async dispatch => {
  try {
    SetLoading();

    const res = await axios.get(
      'https://cors-anywhere.herokuapp.com/' +
        'https://nigerian-states-info.herokuapp.com/api/v1/states'
    );
    if (res.data.data === undefined) return;
    dispatch({
      type: GEO_STATE,
      payload: res.data.data
    });
  } catch (error) {
    dispatch({
      type: ERRORS,
      payload: error.response.data
    });
  }
};
