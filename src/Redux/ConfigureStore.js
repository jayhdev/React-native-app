import createStore from './CreateStore'
import rootReducer from './Reducers'
import rootSaga from './Sagas'

export default () => {
  return createStore(rootReducer, rootSaga)
}
