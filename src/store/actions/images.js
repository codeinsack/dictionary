import * as actionTypes from "../constants"

const fetchImagesList = (search) => ({
  type: actionTypes.FETCH_IMAGES_LIST,
  search,
})

export const imagesActions = {
  fetchImagesList,
}
