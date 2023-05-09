/**
 * @format
 */

import 'react-native';
import React from 'react';
import fetchMock from 'fetch-mock';
import {render, waitForElement, fireEvent} from '@testing-library/react-native';
import {HomeScreen} from '../Screens/Home';
import {API_KEY, BASE_URL} from '../Components/constants';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
const URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
it('renders correctly', () => {
  fetchMock.post(URL, 200);
  render(<HomeScreen />);
});
test('input text is visualable', async () => {
  fetchMock.post(URL, 200);
  const page = render(<HomeScreen />);
  const SearchInput = page.getByPlaceholderText('Search');
  fireEvent.changeText(SearchInput, 'sun');
});
