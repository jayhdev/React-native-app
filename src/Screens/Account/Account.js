import React from 'react';
import { View } from 'react-native';
import { Button } from '../../Components';

class LoadingScreen extends React.Component {
  handleSignOut = () => {
    console.log('sign out');
  };

  render() {
    return (
      <View>
        <Button title="Sign Out" onPress={this.handleSignOut} />
      </View>
    );
  }
}

export default LoadingScreen;
