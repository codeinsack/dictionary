import { combineReducers } from 'redux';

import wordImagesReducer from './wordImages'
import wordDefinitionReducer from './wordDefinition'

const rootReducer = combineReducers({
  wordImages: wordImagesReducer,
  wordDefinition: wordDefinitionReducer,
})

export default rootReducer
