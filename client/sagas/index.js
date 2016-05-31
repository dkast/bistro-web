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
    // isCancelError validation is not longer necesarior in 0.10.0 and up
      yield put(actions.loginUserFail(error));
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
    const action = yield take([actions.LOGOUT_USER, actions.LOGIN_USER_FAILURE]);
    // cancel task if running
    //yield cancel(task);
    // TODO: redirect to latest visited page
    console.log(action);
    if (action.type === actions.LOGOUT_USER) {
      yield put(push(action.redirectTo));
    }
  }
}

export default function* root() {
  yield fork(loginFlow);
}
