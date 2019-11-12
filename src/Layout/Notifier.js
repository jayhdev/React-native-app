import React from 'react'
import { withSnackbar } from 'notistack';
import notifier from '../Services/notify'

class Notifier extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    notifier.setNotifier(this.props.enqueueSnackbar)
  }

  render() {
    return null
  }
}

export default withSnackbar(Notifier);