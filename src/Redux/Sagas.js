import AuthSagas from './AuthRedux/Sagas'

export default function* root() {
  yield [
    AuthSagas
  ]
}
