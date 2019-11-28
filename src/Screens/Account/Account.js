import React from 'react';
import { connect } from 'react-redux';
import { View, Alert } from 'react-native';
import { Text } from 'react-native-elements';

import { ListItem } from '../../Components';
import * as AuthActions from '../../Redux/AuthRedux/Actions';
import Header from '../../Layout/Header';
import rootStyles from '../../styles';
import styles from './styles';
import itemList from './Constants';

const Account = props => {
  const handleLogOut = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Confirm',
        onPress: () => props.logout()
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

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(AuthActions.logout())
});

export default connect(null, mapDispatchToProps)(Account);
