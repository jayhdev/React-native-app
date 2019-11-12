import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Footer from '../../Layout/Footer'
import { ListItem } from '../../Components'
import { connect } from 'react-redux';
import { getChecklists } from '../../Redux/AppRedux/Actions'

class Checklist extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { eventId, fetchChecklists } = this.props

    fetchChecklists(eventId)
  }

  render () {
    const { checklists, navigation } = this.props;
 
    return (
      <View>
        {
          checklists.map((checklist) => (
            <ListItem 
              key={checklist.id} 
              title={checklist.title}
              subtitle={checklist.title}
              containerStyle={styles.container}
              chevron
            />
          ))
        }
        <Footer navigation={navigation}/>
      </View>
    )
  }
}

const mapStateToProps = ({app}) => ({
  checklists: [],
  eventId: app.event.id
})

const mapDispatchToProps = dispatch => ({
  fetchChecklists: () => dispatch(getChecklists())
})

export default connect(mapStateToProps, mapDispatchToProps)(Checklist)
