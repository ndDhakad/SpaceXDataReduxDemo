/*
 *
 * History reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION,
  FETCH_HISTORY_DATA,
  FETCH_HISTORY_DATA_FAIL,
  FETCH_HISTORY_DATA_SUCCESS,
  SET_SPINNER_STATE, } from './constants';

export const initialState = {
  historyArray: null,
  spinnerState: true,
  historyArrayFail: true,
  };

/* eslint-disable default-case, no-param-reassign */
const historyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case FETCH_HISTORY_DATA:
        break;
      case FETCH_HISTORY_DATA_SUCCESS:
        draft.historyArray = action.data;
        break;
      case FETCH_HISTORY_DATA_FAIL:
        draft.historyArrayFail= action.data;
        break;
      case SET_SPINNER_STATE:
        draft.spinnerState = action.data;
        break;
    }
  });

export default historyReducer;
