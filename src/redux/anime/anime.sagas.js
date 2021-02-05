import { takeLatest, call, put, all } from 'redux-saga/effects';
// import axios from 'axios';
import { Axios } from '../../providers/axios';
import {
  FETCH_ANIME_LIST_START,
  FETCH_ANIME_CAT_START,
  FETCH_ANIME_START,
} from './anime.types';
import {
  FetchAnimeListSuccess,
  FetchAnimeListFail,
  FetchAnimeByCatSuccess,
  FetchAnimeByCatFail,
  FetchAnimeByIdSuccess,
  FetchAnimeByIdFail,
} from './anime.actions';

export function* fetchAnimeListAsync() {
  try {
    // const { data } = yield axios.get('https://animeme-beta.herokuapp.com/animes/all');
    const { data } = yield Axios.get('/animes/all');
    yield put(FetchAnimeListSuccess(data));
  } catch (err) {
    yield put(FetchAnimeListFail(err));
  }
}

export function* fetchAnimeByCatAsync({ payload }) {
  try {
    const { data } = yield Axios.get(`/animes/category/${payload}`);

    yield put(FetchAnimeByCatSuccess(data));
  } catch (err) {
    console.log(err);
    yield put(FetchAnimeByCatFail(err));
  }
}

export function* fetchAnimeByIdAsync({ payload }) {
  try {
    const { data } = yield Axios({
      method: 'post',
      url: `/animes/getById`,
      data: {
        id: payload,
      },
    });

    yield put(FetchAnimeByIdSuccess(data));
  } catch (err) {
    console.log(err);
    yield put(FetchAnimeByIdFail(err));
  }
}

export function* onFetchAnimelistStart() {
  yield takeLatest(FETCH_ANIME_LIST_START, fetchAnimeListAsync);
}

export function* onFetchAnimeByCatStart() {
  yield takeLatest(FETCH_ANIME_CAT_START, fetchAnimeByCatAsync);
}

export function* onFetchAnimeByIdStart() {
  yield takeLatest(FETCH_ANIME_START, fetchAnimeByIdAsync);
}

export function* animeSagas() {
  yield all([
    call(onFetchAnimelistStart),
    call(onFetchAnimeByCatStart),
    call(onFetchAnimeByIdStart),
  ]);
}
