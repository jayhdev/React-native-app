import React from 'react';
import { View } from 'react-native';

import { Text } from '../../Components';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import rootStyles from '../../styles';
import styles from './styles';

export default function Overview({ navigation }) {
  return (
    <View style={rootStyles.container}>
      <Header navigation={navigation} />
      <View style={styles.content}>
        <Text h1>Kelly & Durant Wedding</Text>
        <Text>84 Days Away</Text>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}
