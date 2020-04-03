import React from 'react';
import { View } from 'react-native';

import Navigation from './Navigation';
import styles from './styles';
import NavigationService from './Services/navigation';

const RootContainer = () => (
  <View style={styles.root}>
    <Navigation
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </View>
);

export default RootContainer;
