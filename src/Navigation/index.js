import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import HomeScreen from '../Screens/Home';
import SignInScreen from '../Screens/Auth/SingIn';

const AppStack = createStackNavigator(
  {
    SignInScreen: { screen: SignInScreen }
  },
  {
    initialRouteName: 'SignInScreen',
  }
);

const AuthStack = createStackNavigator(
  {
    SignInScreen: { screen: SignInScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'SignInScreen'
  }
);

// Manifest of possible screens
const PrimaryNav = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
);

export default createAppContainer(PrimaryNav);
