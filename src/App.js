import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset';

import RootContainer from './RootContainer';
import theme from './Config/theme';
import getEnvVars from '../environment';

const { apiUrl } = getEnvVars();
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
        <ThemeProvider theme={theme}>
          <RootContainer />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default MainApp;
