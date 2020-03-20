import React, { useState } from 'react'
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
        per_page: 3,
      }
    })
      .then(({ data }) => {
        console.log('data images', data)
        setImages(data.hits)
      })
    axios.get(`https://api.dictionaryapi.dev/api/v1/entries/en/${search}`)
      .then(({ data }) => {
        console.log('data dictionary', data)
        setWord(data[0])
      })
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
              <Typography variant="body2" color="textSecondary" component="p">
                {JSON.stringify(word.meaning)}
              </Typography>
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
    height: 150px;
  }
  .MuiCard-root {
    width: 40%;
  }
  .MuiButton-root {
    margin-left: 10px;
  }
`
