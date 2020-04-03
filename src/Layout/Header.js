import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Header, Button } from '../Components';
import styles from './styles';
import colors from '../Config/color';

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
        color={colors.grey2}
        onPress={this.openSetting}
      />
    );
  };

  centerComponent = () => null;

  leftComponent = hasLeft => {
    const { navigation } = this.props;
    if (!hasLeft) return null;
    return (
      <Button
        icon={{
          name: 'left',
          type: 'antdesign',
          color: colors.secondary
        }}
        title="Back"
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
        onPress={() => navigation.goBack()}
      />
    );
  };

  render() {
    const { hasLeft, title, hasRight } = this.props;

    return (
      <Header
        leftComponent={this.leftComponent(hasLeft)}
        centerComponent={{ text: title }}
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
