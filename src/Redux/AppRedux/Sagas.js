import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './Constants';
import { setEvent, setChecklists } from './Actions';
import apiService from '../../Services/api';

function* getEvent(action) {
  try {
    const eventId = action.payload;
    const result = yield call(apiService, `/events/${eventId}`);

    if (!result.success) {
      return null;
    }

    yield put(setEvent(result.data.event));
  } catch (e) {
    console.log('Error in checklist', e);
    return e.message;
  }

  return null;
}

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
    return e.message;
  }

  return null;
}

function* getBudgetDetail(action) {
  try {
    const { eventId, itemId } = action;
    const result = yield call(
      apiService,
      `/events/${eventId}/budgetItem/${itemId}`
    );

    if (!result.success) {
      return null;
    }

    yield put(setChecklists(result.data.checklists));
  } catch (e) {
    console.log('Error in checklist', e);
    return e.message;
  }

  return null;
}
export default function* appSaga() {
  yield takeLatest(CONSTANTS.GET_EVENT, getEvent);
  yield takeLatest(CONSTANTS.GET_CHECKLISTS, getChecklists);
  yield takeLatest(CONSTANTS.GET_BUDGETDETAIL, getBudgetDetail);
}
