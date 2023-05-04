import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, TouchableOpacity, View} from 'react-native';
import {Movie} from '../MovieCard/MovieCard';
import {Loader} from '../Loading/Loading';

type Movie = {
  id: string;
  title: string;
  releaseYear: string;
  poster_path: string;
  release_date: string;
  overview: string;
};
const API_KEY = '92e9d2ddc265e58dd6d39fa8f044cca9';
export const MovieList = searchText => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [moviesList, setMoviesList] = useState<Movie[]>([]);

  const query = searchText.searchText;
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  const URLSEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  const getMovies = async () => {
    setIsLoading(true);
    try {
      const response =
        query.length < 1 ? await fetch(URL) : await fetch(URLSEARCH);
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
