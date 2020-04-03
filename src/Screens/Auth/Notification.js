import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { Button, Text } from '../../Components';
import styles from './AuthStyles';
import colors from '../../Config/color';

const handleEnable = navigation => {
  navigation.navigate('SignIn');
};

const handleNotNow = navigation => {
  navigation.navigate('SignIn');
};

const Notification = ({ navigation }) => (
  <KeyboardAvoidingView behavior="padding" style={styles.notContainer}>
    <View style={styles.notInnerContainer}>
      <Icon
        name="notifications-active"
        color={colors.secondary}
        size={80}
        containerStyle={styles.notIcon}
      />
      <Text h2>Enable Notifications</Text>
      <Text style={styles.notText}>
        Enable notifications to make sure you don't miss out on important event
        deadlines.
      </Text>
      <Button
        buttonStyle={styles.enableButton}
        title="Enable"
        onPress={() => handleEnable(navigation)}
      />
      <Button
        buttonStyle={styles.notNowButton}
        titleStyle={styles.notNowTitle}
        title="Not Now"
        onPress={() => handleNotNow(navigation)}
      />
    </View>
  </KeyboardAvoidingView>
);

export default Notification;
