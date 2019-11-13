import configureStore from './ConfigureStore'
import rootReducer from './Reducers'
import rootSaga from './Sagas'

let storeObject

export default () => {
  const store = configureStore(rootReducer, rootSaga)
  storeObject = store

  return store
}

export const getStore = () => storeObject