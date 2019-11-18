import React from 'react';
import { Text, View } from 'react-native';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import styles from './styles';

export default function Overview({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Overview Page</Text>
      <Footer navigation={navigation} />
    </View>
  );
}
