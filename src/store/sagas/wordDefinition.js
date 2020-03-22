import { call, put } from "redux-saga/effects";

import * as actionTypes from "../constants";
import { wordDefinitionService } from '../../services/wordDefinition'

export function* fetchWordDefinition({ search }) {
  try {
    yield put({ type: actionTypes.FETCH_WORD_DEFINITION_START })
    const { data } = yield call(wordDefinitionService.fetchWordDefinition, search)
    yield put({ type: actionTypes.FETCH_WORD_DEFINITION_SUCCESS, data: data[0] })
  } catch (error) {
    yield put({ type: actionTypes.FETCH_WORD_DEFINITION_FAIL, error })
  }
}
