import React from 'react';
import {HomeScreen} from './Screens/Home';
import {SafeAreaView, StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <HomeScreen />
    </SafeAreaView>
  );
};
export default App;
