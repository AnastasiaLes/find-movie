import React from 'react';
import {
  MovieCard,
  MovieDesc,
  MovieImg,
  MovieDetails,
  MovieTitle,
} from './MovieCard.styles';

type MovieProps = {
  title: string;
  description: string;
  imgUrl: string;
};

export const Movie = ({title, description, imgUrl}: MovieProps) => {
  return (
    <MovieCard>
      <MovieImg
        source={{
          uri: `https://image.tmdb.org/t/p/w500${imgUrl}`,
        }}
      />
      <MovieDetails>
        <MovieTitle>{title}</MovieTitle>
        <MovieDesc>{description}</MovieDesc>
      </MovieDetails>
    </MovieCard>
  );
};
