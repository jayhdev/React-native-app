
import { combineReducers } from 'redux'
import authReducer from './AuthRedux/Reducers'

export default () => {
  const rootReducer = combineReducers({
    authReducer
  })

  return rootReducer
}
