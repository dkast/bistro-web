import { isCancelError } from 'redux-saga';
import { take, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../middleware/api';

function* authorize(username, password) {
  try {
    const token = yield call(api.loginUser, username, password);
    yield put(actions.loginUserSuccess(token));
    return token;
  } catch (error) {
    if (!isCancelError(error)) {
      yield put(actions.loginUserFail(error));
    }
  }
}

function* loginFlow() {
  while (true) {
    const { username, password } = yield take(actions.LOGIN_USER_REQUEST);
    // fork returns a Task object
    const task = yield fork(authorize, username, password);
    // can take more than one action
    yield take([actions.LOGOUT_USER, actions.LOGIN_USER_FAILURE]);
    // cancel task if running
    yield cancel(task);
  }
}

export default function* root() {
  yield fork(loginFlow);
}
