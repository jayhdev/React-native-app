import React from 'react';
import { Text, View } from 'react-native';
import styles from './HomeStyles';
import Footer from '../../Layout/Footer'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Event Mobile App</Text>
      <Footer navigation={navigation}/>
    </View>
  );
}
