import { combineReducers } from 'redux';

import animeReducer from './anime/anime.reducer';
import authReducer from './auth/auth.reducer';
import formsReducer from './forms/forms.reducer';

const rootReducer = combineReducers({
  anime: animeReducer,
  auth: authReducer,
  forms: formsReducer,
});

export default rootReducer;
