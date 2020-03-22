import { call, put } from "redux-saga/effects";

import * as actionTypes from "../constants";
import { wordsService } from '../../services/words'

export function* fetchWords({ search }) {
  try {
    yield put({ type: actionTypes.FETCH_WORDS_LIST_START })
    const { data } = yield call(wordsService.fetchList, search)
    yield put({ type: actionTypes.FETCH_WORDS_LIST_SUCCESS, data: data[0] })
  } catch (error) {
    yield put({ type: actionTypes.FETCH_WORDS_LIST_FAIL, error })
  }
}
