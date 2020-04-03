import React from 'react';
import { View } from 'react-native';

import { Text } from '../../Components';
import styles from './HomeStyles';
import rootStyles from '../../styles';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';

const Home = ({ navigation }) => {
  // @TODO: Get Event data
  // const eventId = '5daf5d2be080fd346a4cfd6a';
  // this.props.fetchEventData(eventId);

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
};

export default Home;
