import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import rootStyles from '../../../styles';
import { Text, ListItem } from '../../../Components';
import Footer from '../../../Layout/Footer';
import Header from '../../../Layout/Header';
import styles from './styles';
import colors from '../../../Config/color';

const list = [
  {
    _id: '001',
    item: 'Think about when and where you like to have your wedding',
    checked: true
  },
  {
    _id: '002',
    item: 'Nail down a budget.',
    checked: false
  }
];

const SelectableCheckbox = checked => {
  if (checked) {
    return <Icon name="check-circle" color={colors.secondary} />;
  }

  return <View style={styles.emptyCheckBox} />;
};

export default ({ navigation }) => (
  <View style={rootStyles.container}>
    <Header hasLeft hasRight={false} navigation={navigation} />
    <View style={styles.content}>
      <Text h1>12+ Months</Text>
      {list.map((l, i) => (
        <ListItem
          key={l._id}
          title={l.item}
          bottomDivider
          leftElement={SelectableCheckbox(l.checked)}
          containerStyle={l.checked && styles.checkedItem}
        />
      ))}
    </View>
    <Footer navigation={navigation} />
  </View>
);
