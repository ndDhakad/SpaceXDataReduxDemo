/*
 *
 * LaunchHomePage reducer
 *
 */
import produce from "immer";
import {
    DEFAULT_ACTION,
    LAUNCH_PROJECT_FETCH,
    LAUNCH_PROJECT_FETCH_FAIL,
    LAUNCH_PROJECT_FETCH_SUCCESS, SET_SPINNER_STATE
} from "./constants";

export const initialState = {
    launchProjects: null,
    launchFail:false,
    launchSpinner: false,
};

/* eslint-disable default-case, no-param-reassign */
const launchHomePageReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LAUNCH_PROJECT_FETCH:
          draft.launchProjects=[];
        break;
      case LAUNCH_PROJECT_FETCH_SUCCESS:
          try{
              draft.launchProjects= action.data;
          }catch(e){
              console.log(e);
          }
        break;
      case LAUNCH_PROJECT_FETCH_FAIL:
        break;
      case SET_SPINNER_STATE:
          try{
              draft.launchSpinner= action.data;
          }catch(e){
              console.log(e);
          }

        break;
    }
  });

export default launchHomePageReducer;
