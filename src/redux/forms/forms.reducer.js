import { SHOW_SIGN_IN, SHOW_SING_UP, CLOSE_FORMS } from './forms.types';

const INIT_STATE = {
  showSignIn: false,
  showSignUp: false,
};

const formsReducer = (state = INIT_STATE, action) => {
  const { type } = action;
  switch (type) {
    case SHOW_SIGN_IN:
      return {
        ...state,
        showSignIn: true,
        showSignUp: false,
      };
    case SHOW_SING_UP:
      return {
        ...state,
        showSignUp: true,
        showSignIn: false,
      };
    case CLOSE_FORMS:
      return {
        ...state,
        showSignIn: false,
        showSignUp: false,
      };
    default:
      return state;
  }
};

export default formsReducer;
