import * as actionTypes from "../constants"

const initialState = {
  list: [],
  error: null,
  loading: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_IMAGES_LIST_START:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case actionTypes.FETCH_IMAGES_LIST_SUCCESS:
      return {
        ...state,
        list: action.list,
        error: null,
        loading: false,
      }
    case actionTypes.FETCH_IMAGES_LIST_FAIL:
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
