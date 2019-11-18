import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Header } from '../Components';
import styles from './styles';

class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  rightComponent = hasRight => {
    console.log('before has right');
    if (!hasRight) {
      console.log('has right');

      return null;
    }
    return <Icon name="account-circle" />;
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
        placement="left"
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
  hasLeft: true
};

export default MainHeader;
