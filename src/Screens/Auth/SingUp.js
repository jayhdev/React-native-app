import React from 'react';
import { KeyboardAvoidingView, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { Button, Input, Text } from '../../Components';
import styles from './AuthStyles';
import { signupRequest } from '../../Redux/AuthRedux/Actions';
import colors from '../../Config/color';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput(value, field) {
    this.setState({ [field]: value });
  }

  handleSubmit() {
    const { email, password } = this.state;

    if (email && password) {
      this.props.signup({
        email,
        password
      });

      // clear the state after signup for security
      this.setState({
        email: '',
        password: '',
        error: ''
      });
    } else {
      this.setState({
        error: 'Please fill in the values'
      });
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text h2>Kelly & Durant Wedding</Text>
        <View style={styles.inputBox}>
          <Text style={styles.error}>{this.state.error}</Text>
          <Input
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.email}
            onChangeText={val => this.handleChangeInput(val, 'email')}
          />
          <Input
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={15}
            placeholder="Password"
            autoCompleteType="password"
            value={this.state.password}
            rightIcon={{ name: 'md-eye', type: 'ionicon', color: colors.grey3 }}
            onChangeText={val => this.handleChangeInput(val, 'password')}
          />
          <Button title="Create an Account" onPress={this.handleSubmit} />
          <View style={styles.termsAndPolicy}>
            <Text style={styles.tpText}>By signing up, you agree to our </Text>
            <Text style={styles.tpText}>
              <Text style={styles.tpContent}>Terms </Text>
              and
              <Text style={styles.tpContent}> Privacy</Text>
            </Text>
          </View>
        </View>
        <TouchableHighlight
          style={styles.hasAccountContainer}
          onPress={this.handleSubmit}>
          <Text h4 style={styles.hasAccount}>
            I have an Account
          </Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: credentials =>
    dispatch(signupRequest(credentials.email, credentials.password))
});

export default connect(null, mapDispatchToProps)(Signup);
