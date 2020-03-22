import { call, put } from "redux-saga/effects";

import * as actionTypes from "../constants";
import { wordImagesService } from '../../services/wordImages'

export function* fetchWordImages({ search }) {
  try {
    yield put({ type: actionTypes.FETCH_WORD_IMAGES_START })
    const { data } = yield call(wordImagesService.fetchList, search)
    yield put({ type: actionTypes.FETCH_WORD_IMAGES_SUCCESS, list: data.hits })
  } catch (error) {
    yield put({ type: actionTypes.FETCH_WORD_IMAGES_FAIL, error })
  }
}
