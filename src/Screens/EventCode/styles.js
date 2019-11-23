import { StyleSheet } from 'react-native';
import colors from '../../Config/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -20,
    backgroundColor: colors.background
  },
  InnerContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  Icon: {
    marginBottom: 30
  },
  Text: {
    textAlign: 'center',
    color: colors.grey3,
    marginTop: 10
  }
});
