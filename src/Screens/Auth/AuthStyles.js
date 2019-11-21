import { StyleSheet } from 'react-native';
import colors from '../../Config/color';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    paddingHorizontal: 5,
    flex: 1,
    padding: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  inputBox: {
    marginTop: -140
  },
  textInput: {
    borderWidth: 0
  },
  titleStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
    fontSize: 18
  },
  buttonStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 50,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: colors.grey3,
    borderRadius: 10,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10
  },
  contentStyle: {
    fontWeight: 500,
    fontSize: 18,
    marginTop: 5
  },
  error: {
    fontSize: 15,
    color: 'blue',
    marginVertical: 0,
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  forgotPassword: {
    color: colors.secondary,
    marginTop: 30
  },
  hasAccountContainer: {
    marginBottom: 50
  },
  hasAccount: {
    color: colors.secondary,
    textAlign: 'center',
    marginTop: 30
  },
  termsAndPolicy: {
    width: '100%',
    marginTop: 10,
    alignContent: 'center'
  },
  tpText: {
    textAlign: 'center'
  },
  tpContent: {
    color: colors.secondary
  }
});
