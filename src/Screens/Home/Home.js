import React from 'react';
import { View } from 'react-native';

import { Text } from '../../Components';
import styles from './HomeStyles';
import rootStyles from '../../styles';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';

export default function Home({ navigation }) {
  return (
    <View style={rootStyles.container}>
      <Header navigation={navigation} />
      <View style={styles.homeContent}>
        <Text h1>Kelly & Durant Wedding</Text>
        <Text h3>84 Days Away</Text>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}
