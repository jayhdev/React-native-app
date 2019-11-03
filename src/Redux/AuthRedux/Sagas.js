import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './Constants'
import request from '../../Services/api'

function* signupRequest(action) {
  const {email, password} = action

  yield call(request, '/signup', {email, password}, 'post', false)
}

export default function* authSaga() {
  yield takeLatest(CONSTANTS.SIGNUP_REQUEST, signupRequest);
}
