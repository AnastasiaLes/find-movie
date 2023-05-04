import React, {useState, useEffect} from 'react';
import {View, RefreshControl, FlatList, TouchableOpacity} from 'react-native';
import {SearchContainer, SearchInput} from './styles';
import {Movie} from '../Components/MovieCard/MovieCard';
import {Loader} from '../Components/Loading/Loading';
import {API_KEY, BASE_URL, SEARCH_URL} from '../Components/constants';
import {MovieType} from '../Components/types';

export const HomeScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [moviesList, setMoviesList] = useState<MovieType[]>([]);

  const query = searchText;
  const URL =
    query.length < 2
      ? `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
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
  }, [searchText]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <View>
      <SearchContainer>
        <SearchInput
          placeholder="Search"
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
      </SearchContainer>
      <View>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={getMovies} />
          }
          data={moviesList}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SingleMovie', {
                  id: item.id,
                  title: item.title,
                })
              }>
              <Movie
                title={item.title}
                description={item.overview}
                imgUrl={item.poster_path}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
