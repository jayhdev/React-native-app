import { StyleSheet } from 'react-native';
import colors from '../../Config/color';

export default StyleSheet.create({
  content: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  itemContainer: {
    backgroundColor: colors.grey1,
    margin: 5,
    borderRadius: 5
  },
  subtitleStyle: {
    color: colors.grey3
  }
});
