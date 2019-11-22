import React from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, View, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

import { Button, Input, Text } from '../../Components';
import styles from './AuthStyles';
import { loginRequest } from '../../Redux/AuthRedux/Actions';
import colors from '../../Config/color';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignUpPress = this.handleSignUpPress.bind(this);
  }

  handleChangeInput(value, field) {
    this.setState({ [field]: value });
  }

  handleSubmit() {
    const { email, password } = this.state;

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
      });
    }
  }

  handleSignUpPress() {
    this.props.navigation.navigate('SignUp');
  }

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
          <Button title="Login" onPress={this.handleSubmit} />
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

const mapDispatchToProps = dispatch => ({
  login: credentials =>
    dispatch(loginRequest(credentials.email, credentials.password))
});

export default connect(null, mapDispatchToProps)(SignIn);
