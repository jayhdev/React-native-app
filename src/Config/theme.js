import colors from './color';

const theme = {
  colors: {
    ...colors
  },
  Button: {
    titleStyle: {
      color: 'white',
      fontSize: 18,
      fontWeight: 500
    },
    buttonStyle: {
      backgroundColor: colors.secondary,
      width: '100%',
      height: 50,
      borderRadius: 10,
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: 20
    },
    containerStyle: {
      justifyContent: 'space-between'
    }
  },
  ButtonGroup: {
    containerStyle: {
      backgroundColor: colors.grey1,
      marginLeft: 0,
      marginRight: 0
    }
  },
  Input: {
    inputContainerStyle: {
      backgroundColor: colors.grey1,
      borderBottomWidth: 0,
      width: '100%',
      height: 45,
      borderRadius: 10,
      paddingRight: 10
    },
    containerStyle: {
      marginTop: 10,
      paddingLeft: 0,
      paddingRight: 0
    },
    inputStyle: {
      marginLeft: 10,
      marginRight: 10
    }
  },
  Header: {
    backgroundColor: 'white'
  },
  Icon: {
    color: colors.black
  },
  Text: {
    style: {
      fontFamily: 'SF Pro Display',
      lineHeight: 18
    },
    h2Style: {
      fontSize: 36,
      lineHeight: 40,
      fontWeight: 'bold',
      marginBottom: 15
    },
    h4Style: {
      fontSize: 16,
      lineHeight: 22
    }
  }
};

export default theme;
