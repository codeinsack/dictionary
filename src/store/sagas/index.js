import { takeEvery, all } from "redux-saga/effects"

import * as actionTypes from "../constants"
import { fetchWordImages } from "./wordImages";
import { fetchWordDefinition } from "./wordDefinition";

function* watchers() {
  yield all([
    takeEvery(actionTypes.FETCH_WORD_IMAGES, fetchWordImages),
    takeEvery(actionTypes.FETCH_WORD_DEFINITION, fetchWordDefinition),
  ])
}

export default watchers
