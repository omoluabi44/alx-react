import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
const fetch = require("node-fetch");


// Normal action creators
export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export const logout = () => ({ type: LOGOUT });

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

// Async action creator using Redux Thunk
export function loginRequest(email, password) {
  return (dispatch) => {
    // Dispatching login action immediately
    dispatch(login(email, password));

    return fetch("http://localhost:8564/login-success.json")
      .then((res) => res.json())
      .then((json) => {
        // Dispatch login success action after successful fetch
        dispatch(loginSuccess());
      })
      .catch((error) => {
        // Dispatch login failure action if the fetch fails
        dispatch(loginFailure());
      });
  };
}

// Bound action creators - these are just the dispatched functions
export const boundLogin = (email, password) => (dispatch) => dispatch(login(email, password));

export const boundLogout = () => (dispatch) => dispatch(logout());

export const boundDisplayNotificationDrawer = () => (dispatch) => dispatch(displayNotificationDrawer());

export const boundHideNotificationDrawer = () => (dispatch) => dispatch(hideNotificationDrawer());
