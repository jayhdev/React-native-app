import {put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './Constants'
import { setChecklists } from './Actions'
import apiService from '../../Services/api'

function* getChecklists(action) {
  try {
    const {data} = yield call(apiService, `/events/${action.payload}/checklist`)
  
    if (!data.success) {
      return null
    }
  
    yield put(setChecklists(data.data.checklists))
  } catch (e) {
    console.log("Error in checklist", e)
  }
}

export default function* appSaga() {
  yield takeLatest(CONSTANTS.GET_CHECKLISTS, getChecklists);
}
