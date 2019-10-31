import * as CONSTANTS from './Constants'

export function signupRequest(email, password) {
  return {
    type: CONSTANTS.SIGNUP_REQUEST,
    email,
    password
  }
}