import * as actionType from "../constants"

const fetchImagesList = (search) => ({
  type: actionType.FETCH_IMAGES_LIST,
  search,
})

export const imagesActions = {
  fetchImagesList,
}
