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
import { wordImagesActions } from "../../store/actions/wordImages"
import { wordDefinitionActions } from "../../store/actions/wordDefinition"

const WordDefinition = ({ wordImages, wordDefinition, actions }) => {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = React.useState(0);

  const onSearchChange = (event) => {
    const { value } = event.target
    setSearch(value)
  }

  const onFindClick = () => {
    actions.fetchWordImages(search)
    actions.fetchWordDefinition(search)
  }

  const onExpandedChange = panel => (event, newExpanded) => {
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
      {wordDefinition && (
        <Card>
          <div>
            <Carousel images={wordImages} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {wordDefinition.word}
              </Typography>
              {Object.keys(wordDefinition.meaning).map((key, index) => {
                return (
                  <ExpansionPanel
                    key={key}
                    square
                    expanded={expanded === index}
                    onChange={onExpandedChange(index)}
                  >
                    <ExpansionPanelSummary>
                      <Typography>{key}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <ul>
                        {wordDefinition.meaning[key].map((variant, index) => (
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
    wordImages: state.wordImages.list,
    wordDefinition: state.wordDefinition.data,
  }),
  dispatch => ({
    actions: bindActionCreators(
      {
        ...wordImagesActions,
        ...wordDefinitionActions,
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
