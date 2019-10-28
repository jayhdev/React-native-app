import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/ConfigureStore'
import RootContainer from './RootContainer'

export default function MainApp() {
  return (
    <Provider store={store}>
      <RootContainer/>
    </Provider>
  );
}
