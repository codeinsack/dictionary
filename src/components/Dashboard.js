import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

import {
  Box,
  Button,
  TextField,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

const Dashboard = () => {
  const [search, setSearch] = useState('')
  const [image, setImage] = useState(null)

  useEffect(() => {
    axios.get('https://pixabay.com/api/', {
      params: {
        key: '15668645-1c45581844455e90933f1f096',
        q: 'слива',
        per_page: 3,
      }
    })
      .then(({ data }) => {
        setImage(data.hits[0])
      })
  }, [])

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
        setImage(data.hits[0])
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
      {image && (
        <Card key={image.id}>
          <CardActionArea>
            <CardMedia
              image={image.webformatURL}
              title={image.tags}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
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
