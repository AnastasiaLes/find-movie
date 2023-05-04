import React, {useState} from 'react';
import {MovieList} from '../Components/MovieList/MovieList';
import {View} from 'react-native';
import {SearchContainer, SeatchInput} from './styles';

export const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <View>
      <SearchContainer>
        <SeatchInput
          placeholder="Search"
          onChangeText={text => setSearchText(text)}
        />
      </SearchContainer>

      <MovieList searchText={searchText} />
    </View>
  );
};
