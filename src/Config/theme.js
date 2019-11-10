import colors from './color'

const theme = {
  colors: {
    ...colors
  },
  Button: {
    titleStyle: {
      color: 'white',
      fontSize: 18
    },
    buttonStyle: {
      backgroundColor: colors.secondary,
      width: '100%',
      height: 50,
      borderRadius: 10,
      alignSelf: 'center',
      marginTop: 10
    }
  },
  Input: {
    inputContainerStyle: {
      backgroundColor: colors.grey1,
      // borderBottom: '0px solid white',
      width: '100%',
      height: 50,
      borderRadius: 10,
    },
    containerStyle: {
      marginTop: 10
    },
    inputStyle: {
      borderBottomWidth: 0
    }
  }
};

export default theme;
