import keys from 'lodash/keys'

const LOAD = 'auth/LOAD'
const LOAD_SUCCESS = 'auth/LOAD_SUCCESS'
const LOAD_FAIL = 'auth/LOAD_FAIL'
const LOGIN = 'auth/LOGIN'
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
const LOGIN_FAIL = 'auth/LOGIN_FAIL'
const LOGOUT = 'auth/LOGOUT'
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS'
const LOGOUT_FAIL = 'auth/LOGOUT_FAIL'
const SAVE_ROUTE_TO_REDIRECT_BACK = 'auth/SAVE_ROUTE_TO_REDIRECT_BACK'

const initialState = {
  loaded: false,
  loading: false,
  user: null,
  loggingIn: false,
  loggingOut: false,
  redirectBackLink: '/',
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_ROUTE_TO_REDIRECT_BACK:
      return {
        ...state,
        redirectBackLink: action.redirectLocation,
      }
    case LOAD:
      return {
        ...state,
        loading: true,
      }
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: keys(action.result).length !== 0 ? action.result : null,
      }
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      }
    case LOGIN:
      return {
        ...state,
        loaded: false,
        loading: true,
        loggingIn: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        loggingIn: false,
        user: action.result,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loaded: false,
        loggingIn: false,
        user: null,
        error: action.error,
      }
    case LOGOUT:
      return {
        ...state,
        loading: true,
        loaded: false,
        loggingOut: true,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        loggingOut: false,
        user: null,
      }
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        loggingOut: false,
        error: action.error,
      }
    default:
      return state
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('/session'),
  }
}

export function login(username, password) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: client =>
      client.post('/session', {
        data: {
          username,
          password,
        },
      }),
  }
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: client => client.del('/session'),
  }
}

export function redirectToLogin() {
  return dispatch => window.location.push('/login')
}

export function saveRouteToBackRedirect(redirectLocation) {
  return dispatch =>
    dispatch({
      type: SAVE_ROUTE_TO_REDIRECT_BACK,
      redirectLocation,
    })
}
