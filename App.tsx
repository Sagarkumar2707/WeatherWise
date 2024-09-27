import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Navigation } from './src/navigation/Navigation';
import { store } from './src/redux/store';

const App = () => {
  
  return (
    <View style={{flex:1}}>
        <Provider store={store}>
        <Navigation />
        </Provider>
    </View>
  )
}

export default App