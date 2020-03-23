import { call, put } from "redux-saga/effects";

import * as actionTypes from "../constants";
import { dictionaryWordsService } from '../../services/dictionaryWords'

export function* fetchDictionaryWords() {
  try {
    yield put({ type: actionTypes.FETCH_DICTIONARY_WORDS_START })
    const { data } = yield call(dictionaryWordsService.fetchList)
    yield put({ type: actionTypes.FETCH_DICTIONARY_WORDS_SUCCESS, list: data })
  } catch (error) {
    yield put({ type: actionTypes.FETCH_DICTIONARY_WORDS_FAIL, error })
  }
}

export function* addDictionaryWord({ word }) {
  try {
    yield put({ type: actionTypes.ADD_WORD_TO_DICTIONARY_START })
    yield call(dictionaryWordsService.addNewWord, word)
    yield put({ type: actionTypes.FETCH_WORD_DEFINITION_SUCCESS, word })
  } catch (error) {
    yield put({ type: actionTypes.FETCH_WORD_DEFINITION_FAIL, error })
  }
}
