import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import navigationItems from './Constants';
import styles from './styles';

export default ({ navigation }) => {
  const { routeName } = navigation.state;

  return (
    <View style={styles.footerContainer}>
      {navigationItems.map(item => {
        const isCurrentNav = routeName === item.name;
        const itemImage = isCurrentNav ? item.pink : item.default;

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
              <Image source={itemImage} />
              <Text style={isCurrentNav && styles.selectedItem}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
