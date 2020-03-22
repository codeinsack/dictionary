import axios from 'axios'

const fetchList = async search => (
  axios.get(`https://api.dictionaryapi.dev/api/v1/entries/en/${search}`)
)

export const wordsService = {
  fetchList,
}
