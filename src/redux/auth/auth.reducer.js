import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOG_OUT,
} from './auth.types';

const INIT_STATE = {
  user: null,
  error: null,
  fetchingUser: true,
};

const authReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('animeme_token', payload.token);
      return {
        ...state,
        error: null,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        fetchingUser: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOG_OUT:
      localStorage.removeItem('animeme_token');
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case LOAD_USER_FAIL:
      localStorage.removeItem('animeme_token');
      return {
        ...state,
        user: null,
        fetchingUser: false,
      };
    default:
      return state;
  }
};

export default authReducer;
