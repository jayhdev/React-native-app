import React from 'react';
import { Text, View } from 'react-native';

import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import rootStyles from '../../styles';

export default function Finances({ navigation }) {
  return (
    <View style={rootStyles.container}>
      <Header navigation={navigation} />
      <Text>Finances Page</Text>
      <Footer navigation={navigation} />
    </View>
  );
}
