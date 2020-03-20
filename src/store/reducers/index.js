import * as actionType from "../constants"

const initialState = {
  images: [],
  error: null,
  loading: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_IMAGES_LIST_START:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case actionType.FETCH_IMAGES_LIST_SUCCESS:
      return {
        ...state,
        images: action.hits,
        error: null,
        loading: false,
      }
    case actionType.FETCH_IMAGES_LIST_FAIL:
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
