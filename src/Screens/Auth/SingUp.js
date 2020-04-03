import React from 'react';
import { KeyboardAvoidingView, View, TouchableHighlight } from 'react-native';
import { Mutation } from '@apollo/react-components';
import gql from 'graphql-tag';

import { Button, Input, Text } from '../../Components';
import styles from './AuthStyles';
import colors from '../../Config/color';

const signupMutation = gql(`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      id
      isLoggedIn
      error
    }
  }`);

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  handleChangeInput = (value, field) => {
    this.setState({ [field]: value });
  };

  handleSubmit = signUp => {
    const { email, password } = this.state;

    if (email && password) {
      signUp({
        variables: {
          email,
          password
        }
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
  };

  handleLoginReDirect = () => {
    this.props.navigation.navigate('SignIn');
  };

  handleSignupMutation = (signFunc, { data }) => {
    if (data && data.signup && data.signup.isLoggedIn) {
      this.props.navigation.navigate('HomeScreen');
    }

    return (
      <Button
        title="Create an Account"
        onPress={() => this.handleSubmit(signFunc)}
      />
    );
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text h1>Kelly & Durant Wedding</Text>
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
          <Mutation mutation={signupMutation}>
            {this.handleSignupMutation}
          </Mutation>
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
          onPress={this.handleLoginReDirect}
          activeOpacity={1}
          underlayColor="white">
          <Text h4 style={styles.hasAccount}>
            I have an Account
          </Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    );
  }
}

export default Signup;
