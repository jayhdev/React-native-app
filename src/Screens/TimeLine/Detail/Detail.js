import React from 'react';
import { View } from 'react-native';

import rootStyles from '../../../styles';
import Footer from '../../../Layout/Footer';
import Header from '../../../Layout/Header';
import styles from './styles';

export default ({ navigation }) => (
  <View style={rootStyles.container}>
    <Header hasLeft hasRight={false} navigation={navigation} />
    <View style={styles.content} />
    <Footer navigation={navigation} />
  </View>
);
