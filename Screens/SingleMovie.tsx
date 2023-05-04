import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {MovieDesc, MovieImg, SingleMovieContainer} from './styles';
import {Loader} from '../Components/Loading/Loading';
import {API_KEY, BASE_URL} from '../Components/constants';
import {MovieType} from '../Components/types';

export const SingleMovieScreen = ({route, navigation}) => {
  const {id, title} = route.params;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<MovieType>();
  const URL = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&elanguage=en-US`;
  const getMovie = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(URL);
      const json = await response.json();
      console.log(json);
      setMovie(json);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    navigation.setOptions({
      title,
    });
    getMovie();
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
