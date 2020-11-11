/*
 *
 * Address reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, FETCH_ADDRESS_DATA, FETCH_ADDRESS_DATA_FAIL, FETCH_ADDRESS_DATA_SUCCESS, SET_SPINNER_STATE } from './constants';

export const initialState = {
  addressArray: null,
  spinnerState: true,
  addressFail: true,
};

/* eslint-disable default-case, no-param-reassign */
const addressReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case FETCH_ADDRESS_DATA:
        break;
      case FETCH_ADDRESS_DATA_SUCCESS:
        draft.addressArray = action.data;
        break;
      case FETCH_ADDRESS_DATA_FAIL:
        draft.addressFail = action.data;
        break;
      case SET_SPINNER_STATE:
        draft.spinnerState = action.data;
        break;
    }
  });

export default addressReducer;
