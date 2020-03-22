import * as actionTypes from "../constants"

const fetchWordDefinition = (search) => ({
  type: actionTypes.FETCH_WORD_DEFINITION,
  search,
})

export const wordDefinitionActions = {
  fetchWordDefinition,
}
