import { takeEvery, all, call, put } from "redux-saga/effects"
import axios from "axios"

import * as actionTypes from "../constants"

export function* fetchImages({ search }) {
  try {
    yield put({ type: actionTypes.FETCH_IMAGES_LIST_START })
    const { data: hits } = yield call(
      axios.get,
      'https://pixabay.com/api/', {
        params: {
          key: '15668645-1c45581844455e90933f1f096',
          q: search,
          per_page: 5,
          lang: 'en',
        }
      }
    )
    yield put({ type: actionTypes.FETCH_IMAGES_LIST_SUCCESS, hits })
  } catch (error) {
    yield put({ type: actionTypes.FETCH_IMAGES_LIST_FAIL, error })
  }
}

function* watchImages() {
  yield all([
    takeEvery(actionTypes.FETCH_IMAGES_LIST, fetchImages),
  ])
}

export default watchImages
