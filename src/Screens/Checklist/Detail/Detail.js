import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import _ from 'lodash';

import rootStyles from '../../../styles';
import { Text, ListItem } from '../../../Components';
import Footer from '../../../Layout/Footer';
import Header from '../../../Layout/Header';
import styles from './styles';
import colors from '../../../Config/color';

class ChecklistDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          _id: '001',
          item: 'Think about when and where you like to have your wedding',
          checked: true
        },
        {
          _id: '002',
          item: 'Nail down a budget.',
          checked: false
        }
      ]
    };
  }

  selectableCheckbox = checked => {
    if (checked) {
      return <Icon name="check-circle" color={colors.secondary} />;
    }

    return <View style={styles.emptyCheckBox} />;
  };

  toggleItem = (navigation, item, index) => {
    const { list } = this.state;
    const tempList = _.cloneDeep(list);
    tempList[index].checked = !tempList[index].checked;

    this.setState({
      list: tempList
    });
    /**
     * @TODO Send checklistItem updated status to the backend
     */
  };

  render() {
    const { navigation } = this.props;
    const { list } = this.state;

    return (
      <View style={rootStyles.container}>
        <Header hasLeft hasRight={false} navigation={navigation} />
        <View style={styles.content}>
          <Text h1>12+ Months</Text>
          {list.map((l, i) => (
            <ListItem
              key={l._id}
              title={l.item}
              bottomDivider
              leftElement={this.selectableCheckbox(l.checked)}
              onPress={() => this.toggleItem(navigation, l, i)}
              containerStyle={l.checked && styles.checkedItem}
            />
          ))}
        </View>
        <Footer navigation={navigation} />
      </View>
    );
  }
}

export default ChecklistDetail;
