import React from 'react';
import { KeyboardAvoidingView, View, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import { Mutation } from '@apollo/react-components';
import gql from 'graphql-tag';

import { Button, Input, Text } from '../../Components';
import styles from './AuthStyles';
import colors from '../../Config/color';
// import { LoginUserMutation } from '../../Graphql/mutations';

const LoginUserMutation = gql(
  `mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      isLoggedIn
      error
    }
  }`
);

class SignIn extends React.Component {
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

  handleSubmit = loginFunc => {
    const { email, password } = this.state;
    const loginVariables = { email, password };

    if (email && password) {
      loginFunc({ variables: loginVariables });

      // clear the state after login for security
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

  handleSignUpPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleLoginMutation = (loginFunc, { data, error }) => {
    if (error) {
      console.log('error in user mutation :', error);
    }

    if (data && data.login && data.login.isLoggedIn) {
      this.props.navigation.navigate('HomeScreen');
    }

    return (
      <Button title="Login" onPress={() => this.handleSubmit(loginFunc)} />
    );
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
          <Text h1>Kelly & Durant Wedding</Text>
          <Text h4>Keeping track of event details has never been easier.</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.error}>{this.state.error}</Text>
          <Input
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={15}
            placeholder="Email"
            autoCompleteType="email"
            value={this.state.email}
            onChangeText={val => this.handleChangeInput(val, 'email')}
          />
          <Input
            style={styles.textInput}
            secureTextEntry
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            maxLength={15}
            placeholder="Password"
            rightIcon={{ name: 'md-eye', type: 'ionicon', color: colors.grey3 }}
            value={this.state.password}
            onChangeText={val => this.handleChangeInput(val, 'password')}
          />
          <Mutation mutation={LoginUserMutation}>
            {this.handleLoginMutation}
          </Mutation>
          <TouchableHighlight>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={this.handleSignUpPress}
          activeOpacity={1}
          underlayColor="white">
          <View style={styles.titleStyle}>
            <Text style={styles.contentStyle}>Sign Up</Text>
            <Icon name="right" type="antdesign" />
          </View>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    );
  }
}

export default SignIn;
