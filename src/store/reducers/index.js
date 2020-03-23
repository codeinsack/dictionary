import { combineReducers } from 'redux';

import wordImagesReducer from './wordImages'
import wordDefinitionReducer from './wordDefinition'
import dictionaryWordsReducer from './dictionaryWords'

const rootReducer = combineReducers({
  wordImages: wordImagesReducer,
  wordDefinition: wordDefinitionReducer,
  dictionaryWords: dictionaryWordsReducer,
})

export default rootReducer
