import * as actionTypes from "../constants"

const fetchWordsList = (search) => ({
  type: actionTypes.FETCH_WORDS_LIST,
  search,
})

export const wordsActions = {
  fetchWordsList,
}
