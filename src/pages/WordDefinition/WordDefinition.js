import React, { useState } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from 'styled-components'

import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Chip,
} from "@material-ui/core";

import Carousel from "../../components/UI/Carousel/Carousel";
import { imagesActions } from "../../store/actions/images"
import { wordsActions } from "../../store/actions/words"

const WordDefinition = ({ images, word, actions }) => {
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = React.useState('panel1');

  const onSearchChange = (event) => {
    const { value } = event.target
    setSearch(value)
  }

  const onFindClick = () => {
    actions.fetchImagesList(search)
    actions.fetchWordsList(search)
  }

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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
      </Box>
      {word && (
        <Card>
          <div>
            <Carousel images={images} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {word.word}
              </Typography>
              {Object.keys(word.meaning).map((key, index) => {
                return (
                  <ExpansionPanel
                    key={key}
                    square
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                  >
                    <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Typography>{key}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <ul>
                        {word.meaning[key].map((variant, index) => (
                          <li key={index}>
                            <p>{variant.definition}</p>
                            <p><i>{variant.example}</i></p>
                            {variant.synonyms?.map(synonym => (
                              <Chip key={synonym} label={synonym} />
                            ))}
                          </li>
                        ))}
                      </ul>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                )
              })}
            </CardContent>
          </div>
        </Card>
      )}
    </Wrapper>
  );
};

export default connect(
  state => ({
    images: state.images.list,
    word: state.words.word,
  }),
  dispatch => ({
    actions: bindActionCreators(
      {
        ...imagesActions,
        ...wordsActions,
      },
      dispatch,
    ),
  }),
)(WordDefinition)

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
