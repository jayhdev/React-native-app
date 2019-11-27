import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import * as AppActions from '../../../Redux/AppRedux/Actions';
import rootStyles from '../../../styles';
import { Text } from '../../../Components';
import Footer from '../../../Layout/Footer';
import Header from '../../../Layout/Header';
import styles from './styles';

class BudgetDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={rootStyles.container}>
        <Header hasLeft hasRight={false} navigation={navigation} />
        <View style={styles.content}>
          <Text h1>The Twisted Tulip</Text>
        </View>
        <Footer navigation={navigation} />
      </View>
    );
  }
}

const mapStateToProps = ({ app: { event } }) => ({
  eventId: event.id
});

const mapDispatchToProps = dispatch => ({
  fetchBudgetItemDetail: (eventId, itemId) =>
    dispatch(AppActions.getBudgetDetail(eventId, itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BudgetDetail);
