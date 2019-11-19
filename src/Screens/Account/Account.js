import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button } from '../../Components';
import * as AuthActions from '../../Redux/AuthRedux/Actions';

class LoadingScreen extends React.Component {
  handleSignOut = () => {
    this.props.logout();
  };

  render() {
    return (
      <View>
        <Button title="Sign Out" onPress={this.handleSignOut} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(AuthActions.logout())
});

export default connect(null, mapDispatchToProps)(LoadingScreen);
