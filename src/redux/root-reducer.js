import { combineReducers } from 'redux';

import animeReducer from './anime/anime.reducer';

const rootReducer = combineReducers({
  anime: animeReducer,
});

export default rootReducer;
