import React from 'react';
import { View } from 'react-native';

import rootStyles from '../../../styles';
import { Text } from '../../../Components';
import Footer from '../../../Layout/Footer';
import Header from '../../../Layout/Header';
import styles from './styles';

const BudgetDetail = ({ navigation }) => {
  return (
    <View style={rootStyles.container}>
      <Header hasLeft hasRight={false} navigation={navigation} />
      <View style={styles.content}>
        <Text h1>The Twisted Tulip</Text>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

export default BudgetDetail;
