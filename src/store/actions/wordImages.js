import * as actionTypes from "../constants"

const fetchWordImages = (search) => ({
  type: actionTypes.FETCH_WORD_IMAGES,
  search,
})

export const wordImagesActions = {
  fetchWordImages,
}
