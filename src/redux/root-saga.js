import { all, call } from 'redux-saga/effects';

import { animeSagas } from './anime/anime.sagas';
import { authSagas } from './auth/auth.sagas';
import { alertSagas } from './alert/alert.sagas';

export default function* rootSaga() {
  yield all([call(animeSagas), call(authSagas), call(alertSagas)]);
}
