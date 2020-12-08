import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'qs';
import {
  FETCH_ANIME_LIST_START,
  FETCH_ANIME_LIST_SUCCESS,
  FETCH_ANIME_LIST_FAIL,
} from './anime.types';
import { FetchAnimeListSuccess, FetchAnimeListFail } from './anime.actions';

export function* fetchAnimeListAsync() {
  try {
    const { data } = yield axios.get('http://localhost:5000/api/anime/');
    yield put(FetchAnimeListSuccess(data));
  } catch (err) {
    yield put(FetchAnimeListFail(err));
  }
}

export function* onFetchAnimelistStart() {
  yield takeLatest(FETCH_ANIME_LIST_START, fetchAnimeListAsync);
}

export function* animeSagas() {
  yield all([call(onFetchAnimelistStart)]);
}
