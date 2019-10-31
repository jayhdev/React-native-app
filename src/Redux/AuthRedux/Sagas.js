import CONSTANTS from './Constants'
import request from '../../Services/api'

function* signupRequest(action) {
  const {email, password} = action

  return request('/signup', {email, password}, 'POST', false)
}

export default function* authSaga() {
  yield takeLatest(CONSTANTS.SIGNUP_REQUEST, signupRequest);
}
