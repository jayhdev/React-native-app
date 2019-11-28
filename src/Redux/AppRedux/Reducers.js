import * as CONSTANTS from './Constants';

const initialState = {
  checklists: [],
  event: {
    _id: '5daf5d2be080fd346a4cfd6a',
    name: "Susan's Wedding"
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SET_EVENT:
      return {
        ...state,
        event: action.payload
      };

    case CONSTANTS.SET_CHECKLISTS:
      return {
        ...state,
        checklists: action.payload
      };

    default:
      return state;
  }
};
