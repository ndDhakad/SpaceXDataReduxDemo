import { takeLatest, call, put} from 'redux-saga/effects';
import request from '../../utils/request';
import {
  setSpinnerState,
  fetchAddressData,
  fetchAddressDataSuccess,
  fetchAddressDataFail,
} from './actions';
import { FETCH_ADDRESS_DATA } from './constants';

let counterAddressTable = 0;
const failedApiRecallLimit = 2;
const APIUrl = 'https://api.spacexdata.com/v3/payloads';

export function* addressDataFetchSaga() {
  debugger;
  yield put(setSpinnerState(true));
  try {
    const data = yield call(request, APIUrl);

    if (data !== null || data !== {}) {
      yield put(fetchAddressDataSuccess(data));
      yield put(setSpinnerState(false));
    } else {
      yield put(setSpinnerState(false));
      yield put(fetchAddressDataFail(true));
    }
  } catch (e) {
    console.log(e);
    if (counterAddressTable < failedApiRecallLimit) {
      counterAddressTable += 1;
      yield put(fetchAddressData());
    } else {
      yield put(fetchAddressDataFail(true));
    }
  }
}
// Individual exports for testing
export default function* addressSaga() {
  yield takeLatest(FETCH_ADDRESS_DATA, addressDataFetchSaga);
}
