import React from 'react';
import { View, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { ListItem } from '../../Components';
import Header from '../../Layout/Header';
import rootStyles from '../../styles';
import styles from './styles';
import itemList from './Constants';

const logoutMutation = gql`
  mutation logout {
    logout {
      id
      isLoggedIn
      error
    }
  }
`;

const Account = props => {
  const [logout] = useMutation(logoutMutation);

  const handleLogOut = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Confirm',
        onPress: () => logout()
      }
    ]);
  };

  const methods = {
    logout: handleLogOut,
    shareLink: () => props.navigation.navigate('Share')
  };

  const handleItemPress = method => {
    if (!methods[method]) return null;

    return methods[method]();
  };

  return (
    <View style={rootStyles.container}>
      <Header
        hasLeft
        hasRight={false}
        navigation={props.navigation}
        title="Account"
      />
      <View style={styles.content}>
        <View style={styles.itemText}>
          <Text style={[styles.textStyle, styles.userEmail]}>
            {props.user.email}
          </Text>
        </View>
        {itemList.map(item => (
          <View key={item.name}>
            <View style={styles.itemText}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
            {item.lists.map(list => (
              <ListItem
                key={list.name}
                title={list.name}
                titleStyle={list.color && { color: list.color }}
                rightElement={list.rightElement}
                chevron={!!list.chevron}
                bottomDivider
                onPress={() => handleItemPress(list.method)}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Account;
