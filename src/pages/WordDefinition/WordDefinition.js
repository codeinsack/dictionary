import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components'

import {
  Box,
  Button,
  TextField,
} from "@material-ui/core";

import WordCard from "./WordCard";
import { wordImagesActions } from "../../store/actions/wordImages"
import { wordDefinitionActions } from "../../store/actions/wordDefinition"
import { dictionaryWordsActions } from "../../store/actions/dictionaryWords"
import wordImagesSelectors from "../../store/selectors/wordImages"
import wordDefinitionSelectors from "../../store/selectors/wordDefinition"

const WordDefinition = () => {
  const [search, setSearch] = useState('');
  const wordDefinition = useSelector(wordDefinitionSelectors.getData)
  const wordImages = useSelector(wordImagesSelectors.getList)
  const dispatch = useDispatch()

  const onSearchChange = (event) => {
    const { value } = event.target
    setSearch(value)
  }

  const onFindClick = () => {
    dispatch(wordImagesActions.fetchWordImages(search))
    dispatch(wordDefinitionActions.fetchWordDefinition(search))
  }

  const onAddNewWordClick = () => {
    dispatch(dictionaryWordsActions.addWordToDictionary(wordDefinition))
  }

  return (
    <Wrapper>
      <Box display="flex" justifyContent="center" mb={2} >
        <TextField
          variant="outlined"
          size="small"
          value={search}
          onChange={onSearchChange}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={onFindClick}
          disabled={!search.length}
        >
          Find
        </Button>
        <Button
          color="primary"
          variant="outlined"
          onClick={onAddNewWordClick}
          disabled={!wordDefinition}
        >
          Add word
        </Button>
      </Box>
      {wordDefinition && (
        <WordCard
          wordImages={wordImages}
          wordDefinition={wordDefinition}
        />
      )}
    </Wrapper>
  );
};

export default WordDefinition

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .MuiCardMedia-root {
    height: 250px;
  }
  .MuiCard-root {
    width: 70%;
  }
  .MuiButton-root {
    margin-left: 10px;
  }
`
