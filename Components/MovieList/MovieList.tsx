import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, TouchableOpacity, View} from 'react-native';
import {Movie} from '../MovieCard/MovieCard';
import {Loader} from '../Loading/Loading';
import {API_KEY, BASE_URL, SEARCH_URL} from '../constants';
import {SearchText, MovieType} from '../types';

export const MovieList = (searchText: SearchText) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [moviesList, setMoviesList] = useState<MovieType[]>([]);

  const query = searchText.searchText;
  const URL =
    query.length < 2
      ? `${BASE_URL}?api_key=${API_KEY}`
      : `${SEARCH_URL}?api_key=${API_KEY}&query=${query}`;
  const getMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(URL);
      const json = await response.json();
      setMoviesList(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getMovies} />
        }
        data={moviesList}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => console.log('Yes')}>
            <Movie
              title={item.title}
              description={item.overview}
              imgUrl={item.poster_path}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
