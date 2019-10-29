import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Navigation from './Navigation'

class RootContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const isLoggedIn = !!this.props.currentUser

    return (
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootContainer)
