import React from 'react';
import { Text, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';

import { ListItem } from '../../Components';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import rootStyles from '../../styles';
import styles from './styles';

class Finance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
    this.leftElement = this.leftElement.bind(this);
    this.gotoDetail = this.gotoDetail.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  leftElement() {
    <View style={styles.leftIcon} />;
  }

  gotoDetail(id) {
    const { navigation } = this.props;
    const { selectedIndex } = this.state;
    const route = selectedIndex === 0 ? 'BudgetDetail' : 'PaymentDetail';

    navigation.navigate(route, {
      itemId: id
    });
  }

  render() {
    const { navigation, paymentLists, budgetLists } = this.props;
    const { selectedIndex } = this.state;
    const buttons = ['Payment', 'Budget'];
    const showingPayments = selectedIndex === 0;
    const lists = showingPayments ? paymentLists : budgetLists;

    return (
      <View style={rootStyles.container}>
        <Header navigation={navigation} />
        <ButtonGroup
          buttons={buttons}
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          textStyle={styles.textStyle}
          buttonStyle={styles.buttonStyle}
          selectedButtonStyle={styles.selectedBStyle}
          selectedTextStyle={styles.selectedTStyle}
          containerStyle={styles.bgContainerStyle}
          innerBorderStyle={styles.innerBorderStyle}
        />
        <View style={styles.content}>
          <Text>{showingPayments ? 'UPCOMING' : 'VENDORS'}</Text>
          {lists.map(item => (
            <ListItem
              key={item._id}
              title={item.item}
              rightTitle={showingPayments ? item.amount : item.total}
              subTitle={showingPayments ? item.subtitle : item.qty}
              bottomDivider
              leftElement={this.leftElement()}
              onPress={() => this.gotoDetail(item._id)}
              chevron
            />
          ))}
        </View>
        <Footer navigation={navigation} />
      </View>
    );
  }
}

const mapStateToProps = ({ app: { event } }) => ({
  budgetLists: event.budgetItems,
  paymentLists: event.paymentSchedules
});

export default connect(mapStateToProps)(Finance);
