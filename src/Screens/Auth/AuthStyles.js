import { StyleSheet } from 'react-native';
import colors from '../../Config/color';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    paddingHorizontal: 5,
    flex: 1,
    padding: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  inputBox: {
    marginTop: -40
  },
  textInput: {
    borderWidth: 0
  },
  titleStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 18
  },
  buttonStyle: {
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
    fontWeight: '500',
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
  },
  notContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -20,
    backgroundColor: colors.background
  },
  notInnerContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  notIcon: {
    marginBottom: 30
  },
  notText: {
    textAlign: 'center',
    color: colors.grey3,
    marginTop: 10
  },
  enableButton: {
    width: '80%'
  },
  notNowButton: {
    width: '80%',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: colors.grey2,
    marginTop: 0
  },
  notNowTitle: {
    color: colors.black
  }
});
