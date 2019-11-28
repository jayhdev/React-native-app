import { StyleSheet } from 'react-native';
import colors from '../../Config/color';

export default StyleSheet.create({
  content: {
    flex: 1
  },
  dateStyle: {
    marginLeft: 15
  },
  dueDateStyle: {
    marginBottom: 10,
    marginLeft: 15,
    fontSize: 16
  },
  dateContent: {
    borderTopColor: colors.grey0,
    borderTopWidth: 0.5
  },
  timeStyle: {
    margin: 15,
    padding: 15,
    backgroundColor: colors.grey1,
    borderRadius: 8
  }
});
