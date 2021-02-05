import { combineReducers } from 'redux';

import animeReducer from './anime/anime.reducer';
import authReducer from './auth/auth.reducer';
import formsReducer from './forms/forms.reducer';
import alertReducer from './alert/alert.reducer';

const rootReducer = combineReducers({
  anime: animeReducer,
  auth: authReducer,
  forms: formsReducer,
  alerts: alertReducer,
});

export default rootReducer;
