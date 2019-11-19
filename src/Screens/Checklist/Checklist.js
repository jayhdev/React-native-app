import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import { ListItem } from '../../Components';
import { getChecklists } from '../../Redux/AppRedux/Actions';

class Checklist extends React.Component {
  componentDidMount() {
    const { fetchChecklists, eventId } = this.props;
    fetchChecklists(eventId);
  }

  render() {
    const { checklists, navigation } = this.props;

    return (
      <View>
        <Header navigation={navigation} />
        {checklists.map(checklist => (
          <ListItem
            key={checklist._id}
            title={checklist.name}
            subtitle={checklist.name}
            containerStyle={styles.container}
            chevron
          />
        ))}
        <Footer navigation={navigation} />
      </View>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  checklists: app.checklists,
  eventId: app.event.id
});

const mapDispatchToProps = dispatch => ({
  fetchChecklists: eventId => dispatch(getChecklists(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);
