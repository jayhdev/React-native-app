import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import styles from './styles';
import NavigationService from './Services/navigation';

class RootContainer extends React.Component {
  render() {
    // const isLoggedIn = !!this.props.currentUser;

    return (
      <View style={styles.root}>
        <Navigation
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
