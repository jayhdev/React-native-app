import React from 'react';
import { View } from 'react-native';

import Header from '../../../Layout/Header';
import { Text, ListItem } from '../../../Components';
import rootStyles from '../../../styles';
import styles from '../styles';
import colors from '../../../Config/color';

const shareTypes = [
  {
    name: 'Messages',
    leftIcon: {
      name: 'comment',
      color: colors.grey3
    }
  },
  {
    name: 'Email',
    leftIcon: {
      name: 'email',
      color: colors.grey3
    }
  },
  {
    name: 'Copy Link',
    leftIcon: {
      name: 'link',
      color: colors.grey3
    }
  }
];

const Share = () => (
  <View style={rootStyles.container}>
    <Header title="Share" />
    <Text h1 style={styles.shareTitle}>
      Kelly & Durant Wedding
    </Text>
    <View style={styles.content}>
      {shareTypes.map(type => (
        <ListItem
          key={type.name}
          title={type.name}
          leftIcon={type.leftIcon}
          chevron
          bottomDivider
        />
      ))}
    </View>
  </View>
);

export default Share;
