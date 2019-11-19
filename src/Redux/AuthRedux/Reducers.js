import * as CONSTANTS from './Constants';

const initialState = {
  token: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload
      };
    }

    case CONSTANTS.LOGOUT_SUCCESS: {
      return {
        ...state,
        token: null
      };
    }

    default:
      return state;
  }
};
