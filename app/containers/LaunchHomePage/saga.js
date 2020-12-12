 import { takeLatest, call, put, select } from 'redux-saga/effects';
 import {LAUNCH_PROJECT_FETCH} from "./constants";
 import {launchProjectsFetch, launchProjectsFetchSuccess, launchProjectsFetchFail, setSpinnerState} from "./actions";
 import request from "../../utils/request";


 let counterFetchLaunchProjects = 0;
 const failedApiRecallLimit = 2;

 // Launch Success Filter: https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true
 // Launch & Land Filter: https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true
 // All: https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014

export function *launchProjectsFetchSaga(){

    yield put(setSpinnerState(true));
    const apiUrl = "https://api.spaceXdata.com/v3/launches?limit=100"; // data without filters
    try{
        const data = yield call(request, apiUrl);
        if (data !== null || data !== {}) {
            yield put(launchProjectsFetchSuccess(data));
            yield put(setSpinnerState(false));
        }
        else{
            yield put(launchProjectsFetchFail(true));
            yield put(setSpinnerState(false));
        }
    }
    catch(e){
        console.log(e);

        if(counterFetchLaunchProjects < failedApiRecallLimit){
            counterFetchLaunchProjects++;
            yield put(launchProjectsFetch());
        }
        yield put(setSpinnerState(false));
    }
}

// Individual exports for testing
export default function* launchHomePageSaga() {
  // See example in containers/HomePage/saga.js
    yield takeLatest(LAUNCH_PROJECT_FETCH,launchProjectsFetchSaga);
}
