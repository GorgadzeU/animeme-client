import { all, call } from 'redux-saga/effects';

import { animeSagas } from './anime/anime.sagas';

export default function* rootSaga() {
  yield all([call(animeSagas)]);
}
