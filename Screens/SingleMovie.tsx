import React, {useEffect, useState} from 'react';
import {MovieDesc, MovieImg, SingleMovieContainer} from './styles';
import {Loader} from '../Components/Loading/Loading';

export const SingleMovieScreen = () => {
  const KEY_API = '92e9d2ddc265e58dd6d39fa8f044cca9';
  const URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY_API}`;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(URL);
      const json = await response.json();
      setMovie(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <SingleMovieContainer>
      <MovieImg
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
      />
      <MovieDesc>{movie.overview}</MovieDesc>
    </SingleMovieContainer>
  );
};
