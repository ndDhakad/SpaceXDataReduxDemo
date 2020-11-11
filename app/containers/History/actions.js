/*
 *
 * History actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_HISTORY_DATA,
  FETCH_HISTORY_DATA_FAIL,
  FETCH_HISTORY_DATA_SUCCESS,
  SET_SPINNER_STATE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function fetchHistoryData() {

  return {
    type: FETCH_HISTORY_DATA,
  };
}
export function fetchHistoryDataSuccess(data) {

  return {
    type: FETCH_HISTORY_DATA_SUCCESS,
    data
  };
}
export function fetchHistoryDataFail(data) {
  return {
    type: FETCH_HISTORY_DATA_FAIL,
    data
  };
}
export function setSpinnerState(data) {
  return {
    type: SET_SPINNER_STATE,
    data
  };
}
