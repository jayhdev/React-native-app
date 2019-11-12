import React from 'react';
import { connect } from 'react-redux';
import { Text, KeyboardAvoidingView, ScrollView } from 'react-native';

import { Button, Input } from '../../Components';
import styles from './AuthStyles';
import { loginRequest } from '../../Redux/AuthRedux/Actions';

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '' || (this.props.navigation.state.params && this.props.navigation.state.params.error)
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput(value, field) {
    this.setState({[field]: value});
  }

  handleSubmit() {
    const { email, password } = this.state

    if (email && password) {
      this.props.login({
        email,
        password
      });

      // clear the state after login for security
      this.setState({
        email: '',
        password: '',
        error: ''
      });
    } else {
      this.setState({
        error: 'Please fill in the values'
      })
    }
  }

  render() {
   return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <ScrollView>
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
          secureTextEntry={true}
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          maxLength={15}
          placeholder="Password"
          value={this.state.password}
          onChangeText={val => this.handleChangeInput(val, 'password')}
        />
        <Button
          title="Login"
          onPress={this.handleSubmit}
        />
        <Button
          title="Sign Up"
          titleStyle={styles.titleStyle}
          buttonStyle={styles.buttonStyle}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
            this.setState({
              email: '',
              password: '',
              error: ''
            });
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
 }
}

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(loginRequest(credentials.email, credentials.password))
});

export default connect(null, mapDispatchToProps)(SignIn);
