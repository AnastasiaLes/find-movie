import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './Home';
import {SingleMovieScreen} from './SingleMovie';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Movies'}}
        />
        <Stack.Screen
          name="SingleMovie"
          component={SingleMovieScreen}
          options={{title: 'Movie'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
