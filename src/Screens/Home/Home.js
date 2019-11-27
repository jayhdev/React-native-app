import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { Text } from '../../Components';
import styles from './HomeStyles';
import rootStyles from '../../styles';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import * as AppActions from '../../Redux/AppRedux/Actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const eventId = '5daf5d2be080fd346a4cfd6a';
    this.props.fetchEventData(eventId);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={rootStyles.container}>
        <Header navigation={navigation} />
        <View style={styles.homeContent}>
          <Text h1>Kelly & Durant Wedding</Text>
          <Text h3>84 Days Away</Text>
        </View>
        <Footer navigation={navigation} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchEventData: eventId => dispatch(AppActions.getEvent(eventId))
});

export default connect(null, mapDispatchToProps)(Home);
