import { StyleSheet } from 'react-native';
import colors from '../../Config/color';

export default StyleSheet.create({
  content: {
    flex: 1
  },
  userEmail: {
    color: colors.grey3
  },
  itemText: {
    borderBottomColor: colors.grey0,
    borderBottomWidth: 0.5
  },
  textStyle: {
    fontSize: 12,
    color: colors.grey0,
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 15
  },
  shareTitle: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20
  }
});
