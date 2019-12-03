import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import navigationItems from './Constants';
import styles from './styles';

export default ({ navigation }) => {
  const { routeName } = navigation.state;

  return (
    <View style={styles.footerContainer}>
      {navigationItems.map(item => {
        const isCurrentNav = routeName.includes(item.name);

        return (
          <View
            key={item.id}
            style={[
              styles.navContainer,
              isCurrentNav && styles.selectedContainer
            ]}>
            <TouchableOpacity
              onPress={() => navigation.navigate(item.name)}
              style={styles.itemContainer}>
              {item.svg(isCurrentNav)}
              <Text
                style={[styles.itemText, isCurrentNav && styles.selectedItem]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
