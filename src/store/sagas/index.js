import { takeEvery, all, select, take } from "redux-saga/effects"

import * as actionTypes from "../constants"
import { fetchWordImages } from "./wordImages";
import { fetchWordDefinition } from "./wordDefinition";

function* watchers() {
  yield all([
    takeEvery(actionTypes.FETCH_WORD_IMAGES, fetchWordImages),
    takeEvery(actionTypes.FETCH_WORD_DEFINITION, fetchWordDefinition),
    takeEvery('*', function* (action) {
      // const state = yield select()
      // console.log('state', state)

      // yield take(actionTypes.FETCH_WORD_DEFINITION_SUCCESS)
      // yield take(actionTypes.FETCH_WORD_DEFINITION_SUCCESS)
      // yield take(actionTypes.FETCH_WORD_DEFINITION_SUCCESS)
      // console.log('action', action)

      // yield take(actionTypes.FETCH_WORD_DEFINITION_SUCCESS)
      // console.log('SUCCESS')
      // yield take(actionTypes.FETCH_WORD_DEFINITION_FAIL)
      // console.log('FAIL')
    })
  ])
}

export default watchers
