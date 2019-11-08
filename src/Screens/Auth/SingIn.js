import React from 'react';
import { Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button, Input } from '../../Components';
import { connect } from 'react-redux';

import styles from './AuthStyles';

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '' || (this.props.navigation.state.params && this.props.navigation.state.params.error)
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(value) {
    this.setState({email: value});
  }

  handleChangePassword(value) {
    this.setState({password: value});
  }

  handleSubmit() {
    const email = this.state.email;
    const password = this.state.password;

    // this.props.login({
    //   email,
    //   password
    // }, this.props.navigation);
    // clear the state after login for security
    this.setState({
      email: '',
      password: '',
      error: ''
    });
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
          value={this.state.email}
          onChangeText={(email) => this.handleChangeEmail(email)}
        />
        <Input
          style={styles.textInput}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={15}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(password) => this.handleChangePassword(password)}
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
  // login: (credentials, navigation) => dispatch(login(credentials, navigation))
});

export default connect(null, mapDispatchToProps)(SignIn);
