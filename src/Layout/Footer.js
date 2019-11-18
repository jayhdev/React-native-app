import React from 'react';
import { Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { navigationItems } from './Constants';

const component1 = () => <Text>Overview</Text>;
const component2 = () => <Text>Finances</Text>;
const component3 = () => <Text>Checklist</Text>;
const component4 = () => <Text>TimeLine</Text>;
const component5 = () => <Text>Guests</Text>;

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2
    };
  }

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
    this.props.navigation.navigate(navigationItems[selectedIndex]);
  };

  render() {
    const buttons = [
      { element: component1 },
      { element: component2 },
      { element: component3 },
      { element: component4 },
      { element: component5 }
    ];
    const { selectedIndex } = this.state;

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 50 }}
      />
    );
  }
}

export default Footer;
