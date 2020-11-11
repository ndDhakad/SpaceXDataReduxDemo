/*
 *
 * Address actions
 *
 */

import { DEFAULT_ACTION, SET_SPINNER_STATE, FETCH_ADDRESS_DATA, FETCH_ADDRESS_DATA_SUCCESS, FETCH_ADDRESS_DATA_FAIL } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchAddressData() {
debugger;
  return {
    type: FETCH_ADDRESS_DATA,
  };
}
export function fetchAddressDataSuccess(data) {

  return {
    type: FETCH_ADDRESS_DATA_SUCCESS,
    data
  };
}
export function fetchAddressDataFail(data) {
  return {
    type: FETCH_ADDRESS_DATA_FAIL,
    data
  };
}
export function setSpinnerState(data) {
  return {
    type: SET_SPINNER_STATE,
    data
  };
}
