import { isCancelError } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../middleware/api';
import { push } from 'react-router-redux';
import { getStoredToken } from '../middleware/auth';

function* authorize(username, password, redirectTo) {
  try {
    const token = yield call(api.loginUser, username, password);
    yield put(actions.loginUserSuccess(token));
    console.info('go to ' + redirectTo);
    yield put(push(redirectTo));
    return token;
  } catch (error) {
    if (!isCancelError(error)) {
      console.log(error);
      yield put(actions.loginUserFail(error));
    }
  }
}

function* loginFlow() {
  const storedToken = yield  call(getStoredToken);
  while (true) {
    if (!storedToken) {
      const { username, password, redirectTo } = yield take(actions.LOGIN_USER_REQUEST);
      // fork returns a Task object
      const task = yield fork(authorize, username, password, redirectTo);
    }
    // can take more than one action
    yield take([actions.LOGOUT_USER, actions.LOGIN_USER_FAILURE]);
    //const action = yield take('*');
    // cancel task if running
    //yield cancel(task);
  }
}

export default function* root() {
  yield fork(loginFlow);
}
