import React from 'react';
import { Text, View } from 'react-native';
import Footer from '../../Layout/Footer'
import styles from './styles';

export default function TimeLine({navigation}) {
  return (
    <View style={styles.container}>
      <Text>TimeLine Page</Text>
      <Footer navigation={navigation}/>
    </View>
  );
}
