import { StyleSheet } from 'react-native';
import colors from '../../../Config/color';

export default StyleSheet.create({
  content: {
    flex: 1
  },
  emptyCheckBox: {
    width: 20,
    height: 20,
    backgroundColor: colors.grey2,
    borderRadius: 10
  },
  checkedItem: {
    backgroundColor: colors.lightPink
  }
});
