import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './Redux/ConfigureStore'
import RootContainer from './RootContainer'

const store = configureStore()

class MainApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer/>
      </Provider>
    );
  }
}

export default MainApp
