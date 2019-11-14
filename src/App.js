import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import createStore from './Redux';
import RootContainer from './RootContainer';
import theme from './Config/theme';

const store = createStore();

class MainApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RootContainer />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default MainApp;
