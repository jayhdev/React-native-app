import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Header } from '../Components';
import styles from './styles';
import color from '../Config/color';

class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openSetting = () => {
    this.props.navigation.navigate('Account');
  };

  rightComponent = hasRight => {
    if (!hasRight) return null;
    return (
      <Icon
        name="account-circle"
        color={color.grey2}
        onPress={this.openSetting}
      />
    );
  };

  centerComponent = () => null;

  leftComponent = hasLeft => {
    if (!hasLeft) return null;
    return (
      <View style={styles.headerLeft}>
        <Icon name="left" type="antdesign" />
        <Text>Back</Text>
      </View>
    );
  };

  render() {
    const { hasLeft, hasRight } = this.props;

    return (
      <Header
        leftComponent={this.leftComponent(hasLeft)}
        centerComponent={this.centerComponent(hasLeft)}
        rightComponent={this.rightComponent(hasRight)}
      />
    );
  }
}

MainHeader.propTypes = {
  hasRight: PropTypes.bool,
  hasLeft: PropTypes.bool
};

MainHeader.defaultProps = {
  hasRight: true,
  hasLeft: false
};

export default MainHeader;
