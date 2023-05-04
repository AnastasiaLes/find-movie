import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {LoadingContainer} from './Loading.styles';

export const Loader = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" />
      <Text>Loading...</Text>
    </LoadingContainer>
  );
};
