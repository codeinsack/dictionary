import { takeEvery, all } from "redux-saga/effects"

import * as actionTypes from "../constants"
import { fetchImages } from "./images";
import { fetchWords } from "./words";

function* watchers() {
  yield all([
    takeEvery(actionTypes.FETCH_IMAGES_LIST, fetchImages),
    takeEvery(actionTypes.FETCH_WORDS_LIST, fetchWords),
  ])
}

export default watchers
