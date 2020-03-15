import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers';
import thunk from 'redux-thunk';

import AppNavigator from './navigation/AppNavigator';

const fontLoader = () => {
  return Font.loadAsync({
    'rubicon-icon-font': require('./assets/Fonts/rubicon-icon-font.ttf'),
    'Rubik-Black': require('./assets/Fonts/Rubik-Black.ttf'),
    'Rubik-BlackItalic': require('./assets/Fonts/Rubik-BlackItalic.ttf'),
    'Rubik-Bold': require('./assets/Fonts/Rubik-Bold.ttf'),
    'Rubik-BoldItalic': require('./assets/Fonts/Rubik-BoldItalic.ttf'),
    'Rubik-Italic': require('./assets/Fonts/Rubik-Italic.ttf'),
    'Rubik-Light': require('./assets/Fonts/Rubik-Light.ttf'),
    'Rubik-LightItalic': require('./assets/Fonts/Rubik-LightItalic.ttf'),
    'Rubik-Medium': require('./assets/Fonts/Rubik-Medium.ttf'),
    'Rubik-MediumItalic': require('./assets/Fonts/Rubik-MediumItalic.ttf'),
    'Rubik-Regular': require('./assets/Fonts/Rubik-Regular.ttf')
  });
};

const store = createStore(
  RootReducer,
  applyMiddleware(thunk)
);

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={fontLoader}
        onFinish={() => setIsReady({ isReady: true })}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      {console.log('store =>', store.getState())}
      <AppNavigator />
    </Provider>
  );
}