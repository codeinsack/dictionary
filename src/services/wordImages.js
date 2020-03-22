import axios from 'axios'

const fetchList = async search => (
  axios.get('https://pixabay.com/api/', {
    params: {
      key: '15668645-1c45581844455e90933f1f096',
      per_page: 5,
      lang: 'en',
      q: search,
    }
  })
)

export const wordImagesService = {
  fetchList,
}
