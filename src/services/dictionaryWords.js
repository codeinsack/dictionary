import axios from '../axios'

const fetchList = async () => (
  axios.get('words/')
)

const addNewWord = async word => (
  axios.post('words/', word)
)

export const dictionaryWordsService = {
  fetchList,
  addNewWord,
}
