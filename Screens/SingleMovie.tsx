import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {MovieDesc, MovieImg, SingleMovieContainer} from './styles';
import {Loader} from '../Components/Loading/Loading';
import {API_KEY, BASE_URL} from '../Components/constants';
import {MovieType} from '../Components/types';

export const SingleMovieScreen = () => {
  const URL = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<MovieType>();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <SingleMovieContainer>
      {movie && (
        <View>
          <MovieImg
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
          />
          <MovieDesc>{movie.overview}</MovieDesc>
        </View>
      )}
    </SingleMovieContainer>
  );
};
