import React from 'react';
import { Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { Button, Input } from '../../Components';
import styles from './AuthStyles';
import { signupRequest } from '../../Redux/AuthRedux/Actions';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
    const { name, email, password } = this.state;

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
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <ScrollView>
          <Text style={styles.error}>{this.state.error}</Text>
          {/* <Input
            placeholder="Full Name"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={15}
            value={this.state.name}
            onChangeText={val => this.handleChangeInput(val, 'name')}
          /> */}
          <Input
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.email}
            onChangeText={val => this.handleChangeInput(val, 'email')}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={15}
            value={this.state.password}
            onChangeText={val => this.handleChangeInput(val, 'password')}
          />
          <Button title="Create an Account" onPress={this.handleSubmit} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: credentials =>
    dispatch(signupRequest(credentials.email, credentials.password))
});

export default connect(null, mapDispatchToProps)(Signup);
