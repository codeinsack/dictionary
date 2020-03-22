import axios from 'axios'

const fetchWordDefinition = async search => (
  axios.get(`https://api.dictionaryapi.dev/api/v1/entries/en/${search}`)
)

export const wordDefinitionService = {
  fetchWordDefinition,
}
