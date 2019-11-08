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
  }
};

export default theme;
