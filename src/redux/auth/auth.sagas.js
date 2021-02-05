import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Axios } from '../../providers/axios';
import { REGISTER_START, LOGIN_START, LOAD_USER_START } from './auth.types';
import {
  registerSuccess,
  registerFail,
  loginSuccess,
  loginFail,
  loadUserSuccess,
  loadUserFail,
} from './auth.actions';
import { toast } from 'react-toastify';
import { setAlertStart } from '../alert/alert.actions';
import { closeForms } from '../forms/forms.actions';

export function* registerAsync({ payload }) {
  const { name, email, password, password_confirm } = payload;

  try {
    const { data } = yield Axios({
      method: 'POST',
      url: 'api/users/register',
      data: {
        name: name,
        email: email,
        password: password,
        password_confirm: password_confirm,
      },
    });
    yield put(registerSuccess(data));
    yield call(loadUserAsync, { payload: data.token });
    yield put(closeForms());
  } catch (err) {
    yield put(registerFail(err.response.data));
  }
}

export function* loginAsync({ payload }) {
  console.log(payload);
  const { email, password } = payload;

  try {
    const { data } = yield Axios({
      method: 'POST',
      url: 'api/users/login',
      data: {
        email: email,
        password: password,
      },
    });
    yield put(loginSuccess(data));
    yield call(loadUserAsync, { payload: data.token });
    yield put(closeForms());
  } catch ({ response: { data } }) {
    yield put(loginFail(data));
    yield put(setAlertStart({ msg: data.msg, alertType: 'danger' }));
  }
}

export function* loadUserAsync({ payload }) {
  try {
    const { data } = yield Axios({
      method: 'GET',
      url: 'api/users/load',
      headers: {
        Authorization: payload,
      },
    });
    yield put(loadUserSuccess(data));
  } catch (err) {
    yield put(loadUserFail(err.response.data));
  }
}

export function* onRegisterStart() {
  yield takeLatest(REGISTER_START, registerAsync);
}

export function* onLoginStart() {
  yield takeLatest(LOGIN_START, loginAsync);
}

export function* onLoadUserStart() {
  yield takeLatest(LOAD_USER_START, loadUserAsync);
}

export function* authSagas() {
  yield all([call(onRegisterStart), call(onLoginStart), call(onLoadUserStart)]);
}
