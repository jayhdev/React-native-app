import React from 'react';
import { Text, View } from 'react-native';
import Footer from '../../Layout/Footer';
import styles from './styles';

export default function Guests({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Guests Page</Text>
      <Footer navigation={navigation} />
    </View>
  );
}
