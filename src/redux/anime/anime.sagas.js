import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'qs';
import { FETCH_ANIME_LIST_START, FETCH_ANIME_CAT_START } from './anime.types';
import {
  FetchAnimeListSuccess,
  FetchAnimeListFail,
  FetchAnimeByCatSuccess,
  FetchAnimeByCatFail,
} from './anime.actions';

export function* fetchAnimeListAsync() {
  try {
    const { data } = yield axios.get('http://localhost:5000/animes/all');
    yield put(FetchAnimeListSuccess(data));
  } catch (err) {
    yield put(FetchAnimeListFail(err));
  }
}

export function* fetchAnimeByCatAsync({ payload }) {
  try {
    const { data } = yield axios.get(
      `http://localhost:5000/animes/category/${payload}`
    );

    yield put(FetchAnimeByCatSuccess(data));
  } catch (err) {
    console.log(err);
    yield put(FetchAnimeByCatFail(err));
  }
}

export function* onFetchAnimelistStart() {
  yield takeLatest(FETCH_ANIME_LIST_START, fetchAnimeListAsync);
}

export function* onFetchAnimeByCatStart() {
  yield takeLatest(FETCH_ANIME_CAT_START, fetchAnimeByCatAsync);
}

export function* animeSagas() {
  yield all([call(onFetchAnimelistStart), call(onFetchAnimeByCatStart)]);
}
