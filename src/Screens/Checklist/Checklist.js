import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import rootStyles from '../../styles';
import styles from './styles';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import { ListItem } from '../../Components';

const Checklist = ({ navigation }) => {
  // @TODO: Get the correct checklists with graphql
  const checklists = [];
  const GotoDetails = () => {
    navigation.navigate('ChecklistDetail');
  };

  return (
    <View style={rootStyles.container}>
      <Header navigation={navigation} />
      <View style={styles.content}>
        <Text h1>Checklist</Text>
        {checklists.map(checklist => (
          <ListItem
            key={checklist._id}
            title={checklist.name}
            subtitle={checklist.name}
            subtitleStyle={styles.subtitleStyle}
            containerStyle={styles.itemContainer}
            chevron
            onPress={() => GotoDetails(checklist._id)}
          />
        ))}
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Checklist;
