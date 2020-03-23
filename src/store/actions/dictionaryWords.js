import * as actionTypes from "../constants"

const fetchDictionaryWords = () => ({
  type: actionTypes.FETCH_DICTIONARY_WORDS,
})

const addWordToDictionary = (word) => ({
  type: actionTypes.ADD_WORD_TO_DICTIONARY,
  word,
})

export const dictionaryWordsActions = {
  fetchDictionaryWords,
  addWordToDictionary,
}
