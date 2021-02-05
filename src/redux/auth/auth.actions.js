import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_START,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOG_OUT,
} from './auth.types';

// REGISTER ACTIONS
export const registerStart = (creds) => ({
  type: REGISTER_START,
  payload: creds,
});

export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const registerFail = (err) => ({
  type: REGISTER_FAIL,
  payload: err,
});

// LOGIN ACTIONS
export const loginStart = (creds) => ({
  type: LOGIN_START,
  payload: creds,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFail = (err) => ({
  type: LOGIN_FAIL,
  payload: err,
});

// AUTH ACTIONS
export const loadUserStart = (token) => ({
  type: LOAD_USER_START,
  payload: token,
});

export const loadUserSuccess = (data) => ({
  type: LOAD_USER_SUCCESS,
  payload: data,
});

export const loadUserFail = (err) => ({
  type: LOAD_USER_FAIL,
  payload: err,
});

// LOG OUT ACTION
export const logOut = () => ({
  type: LOG_OUT,
});
