
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGOUT_USER = 'LOGOUT_USER';

export function loginUserSuccess(token) {
  sessionStorage.setItem('token', token);
  return {
    type: LOGIN_USER_SUCCESS,
    token
  }
}

export function loginUserFail(error) {
  sessionStorage.removeItem('token');
  return {
    type: LOGIN_USER_FAILURE,
    error
  }
}

export function loginUserRequest(username, password, redirectTo) {
  return {
    type: LOGIN_USER_REQUEST,
    username,
    password,
    redirectTo
  }
}

export function logout() {
  sessionStorage.removeItem('token');
  return {
    type: LOGOUT_USER
  }
}
