import { takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './Constants'
import apiService from '../../Services/api'

function* getChecklists(eventId) {
  console.log("Called here", eventId)
  yield call(apiService, `/events/${eventId}/checklist`, null , 'get', false)
}

export default function* appSaga() {
  yield takeLatest(CONSTANTS.GET_CHECKLISTS, getChecklists);
}
