import {
  FETCH_ANIME_LIST_START,
  FETCH_ANIME_LIST_SUCCESS,
  FETCH_ANIME_LIST_FAIL,
  FETCH_ANIME_CAT_START,
  FETCH_ANIME_CAT_SUCCESS,
  FETCH_ANIME_CAT_FAIL,
  FETCH_ANIME_START,
  FETCH_ANIME_SUCCESS,
  FETCH_ANIME_FAIL,
} from './anime.types';

// FETCHING ALL ANIMES
export const FetcAnimeListStart = () => ({
  type: FETCH_ANIME_LIST_START,
});

export const FetchAnimeListSuccess = (data) => ({
  type: FETCH_ANIME_LIST_SUCCESS,
  payload: data,
});

export const FetchAnimeListFail = (err) => ({
  type: FETCH_ANIME_LIST_FAIL,
  payload: err,
});

// FETCHING ANIMES BY CATEGORY

export const FetchAnimeByCatStart = (data) => ({
  type: FETCH_ANIME_CAT_START,
  payload: data,
});

export const FetchAnimeByCatSuccess = (data) => ({
  type: FETCH_ANIME_CAT_SUCCESS,
  payload: data,
});

export const FetchAnimeByCatFail = (err) => ({
  type: FETCH_ANIME_CAT_FAIL,
  payload: err,
});

// fetch anime by id

export const FetchAnimeByIdStart = (id) => ({
  type: FETCH_ANIME_START,
  payload: id,
});

export const FetchAnimeByIdSuccess = (data) => ({
  type: FETCH_ANIME_SUCCESS,
  payload: data,
});

export const FetchAnimeByIdFail = (err) => ({
  type: FETCH_ANIME_FAIL,
  payload: err,
});
