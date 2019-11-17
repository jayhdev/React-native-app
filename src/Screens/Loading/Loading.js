import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';

class LoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const { navigation } = this.props;
    const token = await AsyncStorage.getItem('token');

    navigation.navigate(token ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default LoadingScreen;
