import { StyleSheet } from 'react-native';
import colors from '../../Config/color';

export default StyleSheet.create({
  bgContainerStyle: {
    borderWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  buttonStyle: {
    backgroundColor: 'white',
    borderWidth: 0
  },
  textStyle: {
    color: colors.black
  },
  innerBorderStyle: {
    width: 0
  },
  selectedBStyle: {
    backgroundColor: 'white',
    borderBottomColor: colors.secondary,
    borderBottomWidth: 0.5
  },
  selectedTStyle: {
    color: colors.secondary
  },
  content: {
    flex: 1
  },
  leftIcon: {
    width: 20,
    height: 20,
    backgroundColor: colors.grey2,
    borderRadius: 10
  }
});
