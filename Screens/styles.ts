import styled from 'styled-components';
import {View, Text, Image, TextInput} from 'react-native';

export const SingleMovieContainer = styled(View)`
  padding: 20px;
`;

export const MovieImg = styled(Image)`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

export const MovieDesc = styled(Text)`
  font-size: 18px;
  line-height: 24px;
`;

export const SearchContainer = styled(View)`
  height: 50px;
  background-color: #fff;
  border-radius: 15px;
  margin: 10px;
`;

export const SearchInput = styled(TextInput)`
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 10px;
`;
