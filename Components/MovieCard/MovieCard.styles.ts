import styled from 'styled-components/native';
// import {Image, Text, View} from 'react-native';

export const MovieCard = styled.View`
  flex-direction: row;
  padding: 15px;
  border-radius: 5px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

export const MovieImg = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

export const MovieDetails = styled.View`
  justify-content: center;
  flex: 1;
`;

export const MovieTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export const MovieDesc = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 12px;
`;
