import { takeEvery, all } from "redux-saga/effects"

import * as actionTypes from "../constants"
import { fetchWordImages } from "./wordImages";
import { fetchWordDefinition } from "./wordDefinition";
import { fetchDictionaryWords, addDictionaryWord } from "./dictionaryWords";

function* watchers() {
  yield all([
    takeEvery(actionTypes.FETCH_WORD_IMAGES, fetchWordImages),
    takeEvery(actionTypes.FETCH_WORD_DEFINITION, fetchWordDefinition),
    takeEvery(actionTypes.FETCH_DICTIONARY_WORDS, fetchDictionaryWords),
    takeEvery(actionTypes.ADD_WORD_TO_DICTIONARY, addDictionaryWord),
  ])
}

export default watchers
