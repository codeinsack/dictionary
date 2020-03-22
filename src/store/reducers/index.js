import { combineReducers } from 'redux';

import imagesReducer from './images'
import wordsReducer from './words'

const rootReducer = combineReducers({
  images: imagesReducer,
  words: wordsReducer,
})

export default rootReducer
