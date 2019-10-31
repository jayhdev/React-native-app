import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/Home';
import SignInScreen from '../Screens/Auth/SingIn';
import SignUpScreen from '../Screens/Auth/SingUp';

const AuthStack = createStackNavigator(
  {
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen }
  },
  {
    initialRouteName: 'SignIn',
  }
);

const AppStack = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'HomeScreen'
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
