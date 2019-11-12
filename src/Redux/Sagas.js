import { all, fork } from 'redux-saga/effects'
import AuthSagas from './AuthRedux/Sagas'
import AppSagas from './AppRedux/Sagas'

export default function* root() {
  yield all([
    fork(AuthSagas),
    fork(AppSagas)
  ])
}
