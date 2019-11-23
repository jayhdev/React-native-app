import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './Constants';
import { setChecklists } from './Actions';
import apiService from '../../Services/api';

function* getChecklists(action) {
  try {
    const result = yield call(
      apiService,
      `/events/${action.payload}/checklist`
    );

    if (!result.success) {
      return null;
    }

    yield put(setChecklists(result.data.checklists));
  } catch (e) {
    console.log('Error in checklist', e);
  }
}

export default function* appSaga() {
  yield takeLatest(CONSTANTS.GET_CHECKLISTS, getChecklists);
}
