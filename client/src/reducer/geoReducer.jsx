import {
  GEO_SEARCH,
  ERRORS,
  CLEAR_ERRORS,
  SETLOADING,
  GEO_STATE
} from '../action/types';
const initialState = {
  address: null,
  state: null,
  loading: false,
  error: null
};

const geoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETLOADING:
      return {
        ...state,
        loading: true
      };

    case GEO_SEARCH:
      return {
        ...state,
        loading: false,
        address: action.payload
      };

    case GEO_STATE:
      return {
        ...state,
        loading: false,
        state: action.payload
      };

    case ERRORS:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};

export default geoReducer;
