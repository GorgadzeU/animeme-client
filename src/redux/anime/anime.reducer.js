import {
  FETCH_ANIME_LIST_START,
  FETCH_ANIME_LIST_SUCCESS,
  FETCH_ANIME_LIST_FAIL,
} from './anime.types';

const INIT_STATE = {
  animeList: [],
  anime: null,
  loading: false,
  error: null,
};

const animeReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ANIME_LIST_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ANIME_LIST_SUCCESS:
      return {
        ...state,
        animeList: payload,
        loading: false,
      };
    case FETCH_ANIME_LIST_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default animeReducer;
