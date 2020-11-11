import { takeLatest, call, put} from 'redux-saga/effects';
import request from '../../utils/request';
import {
  setSpinnerState,
  fetchHistoryData,
  fetchHistoryDataSuccess,
  fetchHistoryDataFail,
} from './actions';
import { FETCH_HISTORY_DATA } from './constants';

let counterHistoryTable = 0;
const failedApiRecallLimit = 2;
const APIUrl = 'https://api.spacexdata.com/v3/history';

export function* historyDataFetchSaga() {
  yield put(setSpinnerState(true));
  try {
    const data = yield call(request, APIUrl);

    if (data !== null || data !== {}) {
      yield put(fetchHistoryDataSuccess(data));
      yield put(setSpinnerState(false));
    } else {
      yield put(setSpinnerState(false));
      yield put(fetchHistoryDataFail(true));
    }
  } catch (e) {
    if (counterHistoryTable < failedApiRecallLimit) {
      counterHistoryTable += 1;
      yield put(fetchHistoryData());
    } else {
      yield put(fetchHistoryDataFail(true));
    }
  }
}
// Individual exports for testing
export default function* historySaga() {
  yield takeLatest(FETCH_HISTORY_DATA, historyDataFetchSaga);
}
