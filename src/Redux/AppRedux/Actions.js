import * as CONSTANTS from './Constants'

export function getChecklists(eventId) {
  return {
    type: CONSTANTS.GET_CHECKLISTS,
    payload: eventId
  }
}

export function setChecklists(checklists) {
  return {
    type: CONSTANTS.SET_CHECKLISTS,
    payload: checklists
  }
}
