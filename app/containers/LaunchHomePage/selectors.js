import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the launchHomePage state domain
 */

const selectLaunchHomePageDomain = state =>
  state.launchHomePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LaunchHomePage
 */

const makeSelectLaunchHomePage = () =>
  createSelector(
    selectLaunchHomePageDomain,
    substate => substate
  );

const makeSelectLaunchProjects = () =>
  createSelector(
    selectLaunchHomePageDomain,
    substate => substate.launchProjects
  );

const makeSelectLaunchProjectsFail = () =>
  createSelector(
    selectLaunchHomePageDomain,
    substate => substate.launchFail
  );

const makeSelectSpinnerState = () =>
  createSelector(
    selectLaunchHomePageDomain,
    substate => substate.launchSpinner
  );

const makeSelectLaunchSuccess = () =>
  createSelector(
    selectLaunchHomePageDomain,
    substate => substate.launchSuccess
  );

const makeSelectLandingSuccess = () =>
  createSelector(
    selectLaunchHomePageDomain,
    substate => substate.landingSuccess
  );

const makeSelectYear = () =>
  createSelector(
    selectLaunchHomePageDomain,
    substate => substate.selectedYear
  );

export default makeSelectLaunchHomePage;
export { selectLaunchHomePageDomain, makeSelectLaunchProjects, makeSelectSpinnerState, makeSelectLaunchProjectsFail, makeSelectLaunchSuccess, makeSelectLandingSuccess, makeSelectYear };
