import { StyleSheet } from 'react-native';
import colors from '../Config/color';

export default StyleSheet.create({
  titleStyle: {
    color: colors.secondary,
    marginBottom: 5
  },
  buttonStyle: {
    backgroundColor: 'white'
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.grey1,
    width: '100%'
  },
  navContainer: {
    paddingTop: 10,
    paddingBottom: 20
  },
  selectedContainer: {
    borderTopColor: colors.secondary,
    borderTopWidth: 0.5,
    width: '20%'
  },
  selectedItem: {
    color: colors.secondary
  },
  itemContainer: {
    alignItems: 'center'
  }
});
