import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './Constants';
import apiService from '../../Services/api';
import navigationService from '../../Services/navigation';
import { loginSuccess } from './Actions';

function* signupRequest(action) {
  const { email, password } = action;

  yield call(apiService, '/signup', { email, password }, 'post', false);
  navigationService.navigate('Login');
}

function* loginRequest(action) {
  try {
    const { email, password } = action;

    const { data } = yield call(
      apiService,
      '/login',
      { email, password },
      'post',
      false
    );

    if (data.success) {
      yield put(loginSuccess(data.data.token));
      navigationService.navigate('HomeScreen');
    } else {
      throw new Error(data.message);
    }
  } catch (e) {
    console.log('Error in login', e);
  }
}

export default function* authSaga() {
  yield takeLatest(CONSTANTS.SIGNUP_REQUEST, signupRequest);
  yield takeLatest(CONSTANTS.LOGIN_REQUEST, loginRequest);
}
