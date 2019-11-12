
import { combineReducers } from 'redux'
import authReducer from './AuthRedux/Reducers'
import appReducer from './AppRedux/Reducers'

export default () => {
  const rootReducer = combineReducers({
    authReducer,
    appReducer
  })

  return rootReducer
}
