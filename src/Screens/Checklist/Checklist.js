import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Footer from '../../Layout/Footer'

export default function Checklist({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Checklist Page</Text>
      <Footer navigation={navigation}/>
    </View>
  );
}
