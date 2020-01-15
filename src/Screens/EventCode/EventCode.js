import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { Button, Text, Input } from '../../Components';
import styles from './styles';
import colors from '../../Config/color';

const handleEnable = navigation => {
  navigation.navigate('SignIn');
};

const EventCode = ({ navigation }) => (
  <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <View style={styles.InnerContainer}>
      <Icon
        name="check-circle"
        color={colors.secondary}
        size={80}
        containerStyle={styles.Icon}
      />
      <Text h2>Enable Event Code</Text>
      <Text style={styles.Text}>Enter your event code to gain access</Text>
      <Input placeholder="Event Code" />
      <Button title="Continue" onPress={() => handleEnable(navigation)} />
    </View>
  </KeyboardAvoidingView>
);

export default EventCode;
