import * as actionTypes from "../constants"

const initialState = {
  list: [],
  error: null,
  loading: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_WORD_TO_DICTIONARY_START:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case actionTypes.ADD_WORD_TO_DICTIONARY_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.newWord],
        error: null,
        loading: false,
      }
    case actionTypes.ADD_WORD_TO_DICTIONARY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case actionTypes.FETCH_DICTIONARY_WORDS_START:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case actionTypes.FETCH_DICTIONARY_WORDS_SUCCESS:
      return {
        ...state,
        list: action.list,
        error: null,
        loading: false,
      }
    case actionTypes.FETCH_DICTIONARY_WORDS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
