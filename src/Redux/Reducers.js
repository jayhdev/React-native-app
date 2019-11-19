import { combineReducers } from 'redux';
import authReducer from './AuthRedux/Reducers';
import appReducer from './AppRedux/Reducers';

export default combineReducers({
  auth: authReducer,
  app: appReducer
});
