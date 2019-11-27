import * as CONSTANTS from './Constants';

export function getEvent(eventId) {
  return {
    type: CONSTANTS.GET_EVENT,
    payload: eventId
  };
}

export function setEvent(event) {
  return {
    type: CONSTANTS.SET_EVENT,
    payload: event
  };
}

export function getChecklists(eventId) {
  return {
    type: CONSTANTS.GET_CHECKLISTS,
    payload: eventId
  };
}

export function setChecklists(checklists) {
  return {
    type: CONSTANTS.SET_CHECKLISTS,
    payload: checklists
  };
}

export function getBudgetDetail(eventId, itemId) {
  return {
    type: CONSTANTS.GET_BUDGETDETAIL,
    eventId,
    itemId
  };
}
