import { all, fork } from 'redux-saga/effects'
import AuthSagas from './AuthRedux/Sagas'

export default function* root() {
  yield all([
    fork(AuthSagas)
  ])
}
