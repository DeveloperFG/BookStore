import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { store } from '../books/src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
 
 return (
    <Provider store={store}>
      <NavigationContainer>
          <Routes/>
      </NavigationContainer>
    </Provider>
  );
  
} 