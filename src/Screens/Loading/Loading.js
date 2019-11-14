import React from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import styles from './styles';

class Loading extends React.Component {
  componentDidMount() {
    const token = AsyncStorage.getItem('token');
    const { navigation } = this.props;
    console.log('Token here', token);

    if (token) {
      navigation.navigate('HomeScreen');
    } else {
      navigation.navigate('SignIn');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading Page</Text>
      </View>
    );
  }
}

export default Loading;
