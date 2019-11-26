import React from 'react';
import { Text, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

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

    navigation.navigate(route);
  }

  render() {
    const { navigation } = this.props;
    const { selectedIndex } = this.state;
    const buttons = ['Payment', 'Budget'];
    const paymentLists = [
      {
        _id: '001',
        title: 'The Twisted Tulip',
        subtitle: 'Due 11/21',
        total: '124.1'
      },
      {
        _id: '002',
        title: 'King of Pops',
        subtitle: 'Due 11/28',
        total: '124.1'
      }
    ];
    const budgetLists = [
      {
        _id: '001',
        title: 'The Twisted Tulip',
        subtitle: 'Florals',
        total: '615.0'
      },
      {
        _id: '002',
        title: 'King of Pops',
        subtitle: 'Food and Beverage',
        total: '655.0'
      }
    ];
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
          {lists.map((l, i) => (
            <ListItem
              key={l._id}
              title={l.title}
              rightTitle={l.total}
              subtitle={l.subtitle}
              bottomDivider
              leftElement={this.leftElement()}
              onPress={() => this.gotoDetail(l._id)}
              chevron
            />
          ))}
        </View>
        <Footer navigation={navigation} />
      </View>
    );
  }
}

export default Finance;
