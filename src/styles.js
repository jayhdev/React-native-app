import { StyleSheet } from 'react-native';
import colors from './Config/color';

export default StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center'
  }
});
