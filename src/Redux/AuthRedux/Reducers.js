import * as CONSTANTS from './Constants';

const initialState = {
  token: '',
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        user: {
          id: action.payload.id,
          email: action.payload.email
        }
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
