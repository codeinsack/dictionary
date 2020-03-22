import React from 'react';
import { Carousel as Wrapper } from 'react-responsive-carousel'

import {
  CardMedia,
} from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = ({ images }) => {
  return (
    <Wrapper
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
    </Wrapper>
  );
};

export default Carousel;
