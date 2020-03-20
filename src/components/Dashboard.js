import React, {Fragment, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

import {
  Box,
  Button,
  TextField,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Chip from "@material-ui/core/Chip";

const Dashboard = () => {
  const [search, setSearch] = useState('')
  const [images, setImages] = useState([])
  const [word, setWord] = useState(null)

  const onSearchChange = (event) => {
    const { value } = event.target
    setSearch(value)
  }

  const onFindClick = () => {
    axios.get('https://pixabay.com/api/', {
      params: {
        key: '15668645-1c45581844455e90933f1f096',
        q: search,
        per_page: 5,
        lang: 'en',
      }
    })
      .then(({ data }) => {
        setImages(data.hits)
      })
    axios.get(`https://api.dictionaryapi.dev/api/v1/entries/en/${search}`)
      .then(({ data }) => {
        console.log('data dictionary', data)
        setWord(data[0])
      })
  }
  const [expanded, setExpanded] = React.useState('panel1');

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
            <Carousel
              showThumbs={false}
              showStatus={false}
            >
              {images.map(image => (
                <CardMedia
                  key={image.id}
                  image={image.webformatURL}
                  title={image.tags}
                />
              ))}
            </Carousel>
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

export default Dashboard;

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
