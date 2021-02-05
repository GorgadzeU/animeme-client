import { SHOW_SING_UP, SHOW_SIGN_IN, CLOSE_FORMS } from './forms.types';

export const onShowSignIn = () => ({
  type: SHOW_SIGN_IN,
});

export const onShowSignUp = () => ({
  type: SHOW_SING_UP,
});

export const closeForms = () => ({
  type: CLOSE_FORMS,
});
