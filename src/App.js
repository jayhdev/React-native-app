import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset';

import createStore from './Redux';
import RootContainer from './RootContainer';
import theme from './Config/theme';
import getEnvVars from '../environment';

const { apiUrl } = getEnvVars();
const store = createStore();
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: apiUrl
  })
});

class MainApp extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RootContainer />
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default MainApp;
