import * as CONSTANTS from './Constants';

export function signupRequest(email, password) {
  return {
    type: CONSTANTS.SIGNUP_REQUEST,
    email,
    password
  };
}

export function loginRequest(email, password) {
  return {
    type: CONSTANTS.LOGIN_REQUEST,
    email,
    password
  };
}

export function loginSuccess(token) {
  return {
    type: CONSTANTS.LOGIN_SUCCESS,
    payload: token
  };
}

export function logout() {
  return {
    type: CONSTANTS.LOGOUT
  };
}

export function logoutSuccess() {
  return {
    type: CONSTANTS.LOGOUT_SUCCESS
  };
}
