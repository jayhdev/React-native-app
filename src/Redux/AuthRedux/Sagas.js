import { AsyncStorage, Alert } from 'react-native';
import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './Constants';
import apiService from '../../Services/api';
import navigationService from '../../Services/navigation';
import { loginSuccess, logoutSuccess } from './Actions';

function* signupRequest(action) {
  const { email, password } = action;
  try {
    const result = yield call(
      apiService,
      '/signup',
      { email, password },
      'post',
      false
    );

    if (result.success) {
      navigationService.navigate('Notification');
    } else if (result.status === 409) {
      Alert.alert(
        'Email in Use',
        'The email entered is already in use. Please login or select forgot password to continue',
        [{ text: 'Try Again' }]
      );
    } else {
      throw new Error(result.data);
    }
  } catch (e) {
    console.log('Signup error', e);
    // @TODO  Change error message based on the env
    Alert.alert('Unexpected Error', e.message, [{ text: 'Try Again' }]);
  }
}

function* loginRequest(action) {
  try {
    const { email, password } = action;

    const result = yield call(
      apiService,
      '/login',
      { email, password },
      'post',
      false
    );

    if (result.success) {
      const { token } = result.data;
      yield call(AsyncStorage.setItem, 'token', JSON.stringify(token));
      yield put(loginSuccess(token));
      navigationService.navigate('HomeScreen');
    } else if (result.status === 401) {
      Alert.alert(
        'Incorrect Password',
        'The password you entered does not match the email',
        [{ text: 'Try Again' }]
      );
    }
  } catch (e) {
    console.log('Login Error', e);
  }
}

function* logout() {
  yield call(AsyncStorage.removeItem, 'token');
  yield put(logoutSuccess());
  navigationService.navigate('Auth');
}

export default function* authSaga() {
  yield takeLatest(CONSTANTS.SIGNUP_REQUEST, signupRequest);
  yield takeLatest(CONSTANTS.LOGIN_REQUEST, loginRequest);
  yield takeLatest(CONSTANTS.LOGOUT, logout);
}
