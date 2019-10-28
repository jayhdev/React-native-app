// @flow

import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import HomeScreen from './Screens/Home'

class RootContainer extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HomeScreen />
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootContainer)
