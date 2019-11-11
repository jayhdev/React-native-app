import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Footer from '../../Layout/Footer'
import { ListItem } from 'react-native-elements'
// import { ListItem } from '../../Components'

export default function Checklist({navigation}) {
  const checklists = [
    {
      id: '1',
      title: '13 months'
    },
    {
      id: '2',
      title: '12 months'
    },
  ]

  return (
    <View>
      {
        checklists.map((checklist) => (
          <ListItem 
            key={checklist.id} 
            title={checklist.title}
            subtitle={checklist.title}
            containerStyle={styles.container}
            chevron
          />
        ))
      }
      <Footer navigation={navigation}/>
    </View>
  );
}
