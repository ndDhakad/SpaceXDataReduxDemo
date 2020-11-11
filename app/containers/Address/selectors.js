import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the address state domain
 */

const selectAddressDomain = state => state.address || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Address
 */

const makeSelectAddress = () =>
  createSelector(
    selectAddressDomain,
    substate => substate,
  );

const makeSelectAddressArray = () =>
  createSelector(
    selectAddressDomain,
    substate => substate.addressArray,
  );

const makeSelectSpinnerState = () =>
  createSelector(
    selectAddressDomain,
    substate => substate.spinnerState,
  );

export default makeSelectAddress;
export { selectAddressDomain, makeSelectAddressArray, makeSelectSpinnerState };
