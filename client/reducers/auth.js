import * as actionTypes from '../actions';
import merge from 'lodash/merge';
import jwtDecode from 'jwt-decode';

const initialState = {
  token: null,
  username: null,
  fullname: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
  error: false
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_USER_REQUEST:
      return merge({}, state, {
        isAuthenticating: true,
        statusText: null,
        error: false,
      });

    case actionTypes.LOGIN_USER_SUCCESS:
      return merge({}, state, {
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.token,
        username: jwtDecode(action.token).username,
        fullname: jwtDecode(action.token).fullname,
        statusText: 'Se ha iniciado sesion.',
        error: false
      });

    case actionTypes.LOGIN_USER_FAILURE:
      return merge({}, state, {
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        username: null,
        fullname: null,
        statusText: 'No se pudo iniciar Sesion. Verifique que los datos sean correctos.',
        error: true
      });

    case actionTypes.LOGOUT_USER:
      return merge({}, state, {
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        username: null,
        fullname: null,
        statusText: 'Se ha terminado la sesion.',
        error: false
      });
    default:
      return state
  }
}
