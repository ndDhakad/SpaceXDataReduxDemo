/*
 *
 * LaunchHomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  LAUNCH_PROJECT_FETCH,
  LAUNCH_PROJECT_FETCH_FAIL,
  LAUNCH_PROJECT_FETCH_SUCCESS, SET_SPINNER_STATE
} from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function launchProjectsFetch() {
  return {
    type: LAUNCH_PROJECT_FETCH
  };
}

export function launchProjectsFetchSuccess(data) {
  console.log(data);
  return {
    type: LAUNCH_PROJECT_FETCH_SUCCESS,
    data
  };
}

export function launchProjectsFetchFail(data) {
  return {
    type: LAUNCH_PROJECT_FETCH_FAIL,
    data
  };
}


export function setSpinnerState(data) {
  return {
    type: SET_SPINNER_STATE,
    data
  };
}
