import { StyleSheet } from 'react-native';
import colors from './Config/color';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between'
  }
});
