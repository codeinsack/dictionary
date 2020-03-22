import { call, put } from "redux-saga/effects";

import * as actionTypes from "../constants";
import { imagesService } from '../../services/images'

export function* fetchImages({ search }) {
  try {
    yield put({ type: actionTypes.FETCH_IMAGES_LIST_START })
    const { data } = yield call(imagesService.fetchList, search)
    yield put({ type: actionTypes.FETCH_IMAGES_LIST_SUCCESS, list: data.hits })
  } catch (error) {
    yield put({ type: actionTypes.FETCH_IMAGES_LIST_FAIL, error })
  }
}
