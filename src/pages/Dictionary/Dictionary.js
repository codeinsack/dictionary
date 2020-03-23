import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import { dictionaryWordsActions } from "../../store/actions/dictionaryWords"
import dictionaryWordsSelectors from "../../store/selectors/dictionaryWords";

const Dictionary = () => {
  const dispatch = useDispatch()
  const dictionaryWords = useSelector(dictionaryWordsSelectors.getList)
  console.log('dictionaryWords', dictionaryWords)

  useEffect(() => {
    dispatch(dictionaryWordsActions.fetchDictionaryWords())
  }, [])

  return (
    <h1>
      Dictionary
    </h1>
  );
};

export default Dictionary;
