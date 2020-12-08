import {
  FETCH_ANIME_LIST_START,
  FETCH_ANIME_LIST_SUCCESS,
  FETCH_ANIME_LIST_FAIL,
} from './anime.types';

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
