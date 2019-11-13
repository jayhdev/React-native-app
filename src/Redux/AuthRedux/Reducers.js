import * as CONSTANTS from "./Constants"

const initialState = {
  token: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload
      }
    } 

    default:
      return state
  }
}