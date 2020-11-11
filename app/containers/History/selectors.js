import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the history state domain
 */

const selectHistoryDomain = state => state.history || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by History
 */

const makeSelectHistory = () =>
  createSelector(
    selectHistoryDomain,
    substate => substate,
  );

const makeSelectHistoryArray = () =>
  createSelector(
    selectHistoryDomain,
    substate => substate.historyArray,
  );

const makeSelectSpinnerState = () =>
  createSelector(
    selectHistoryDomain,
    substate => substate.spinnerState,
  );

export default makeSelectHistory;
export { selectHistoryDomain, makeSelectHistoryArray, makeSelectSpinnerState };
