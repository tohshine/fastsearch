import {
  ADDPROFILE,
  ERRORS,
  CLEAR_ERRORS,
  GET_PROFILE,
  EDITPROFILE,
  GET_ALL_ENT,
  GET_ENT_DETAILS,
  CLEAR_ENT_DETAILS,
  FILTER,
  CLEAR_FILTER,
  SET_PROFILE_LOADING
} from '../action/types';
import { ClearEntDeatils } from '../action/dataAction';

const initialState = {
  error: null,
  companyProfile: null,
  companies: null,
  companyDetails: null,
  filteredCompany: null,
  loading:false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPROFILE:
      return {
        ...state,
        companyProfile: action.payload,
        error: null
      };

    case ERRORS:
      return {
        ...state,
        error: action.payload.msg
      };
    case GET_PROFILE:
      return {
        ...state,
        loading:false,
        companyProfile: action.payload
      };

    case EDITPROFILE:
      return {
        ...state,
        companyProfile: action.payload
      };
      case SET_PROFILE_LOADING:
        return{
          ...state,
          loading:true
        }
    //?clent part
    case GET_ALL_ENT:
      return {
        ...state,
        companies: action.payload
      };
    case FILTER:
      return {
        ...state,
        filteredCompany: state.companies.filter(comp => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return comp.name.match(regex) || comp.email.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filteredCompany: null
      };
    case GET_ENT_DETAILS:
      return {
        ...state,
        companyDetails: action.payload
      };

    case CLEAR_ENT_DETAILS:
      return {
        ...state,
        companyDetails: null
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        companyProfile: null,
      };
    default:
      return state;
  }
};

export default dataReducer;
