import * as actionTypes from "../constants"

const initialState = {
  data: null,
  error: null,
  loading: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WORD_DEFINITION_START:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case actionTypes.FETCH_WORD_DEFINITION_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: null,
        loading: false,
      }
    case actionTypes.FETCH_WORD_DEFINITION_FAIL:
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
