import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const sessionQuery = gql(`
  { 
    session {
      id
      isLoggedIn
      error
    }
  }
`);

function LoadingScreen({ navigation }) {
  const data = useQuery(sessionQuery);
  navigation.navigate(
    data && data.session && data.session.isLoggedIn ? 'App' : 'Auth'
  );

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}

export default LoadingScreen;
