import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/Home';
import AccountScreen from '../Screens/Account';
import Checklist from '../Screens/Checklist';
import Finances from '../Screens/Finances';
import Guests from '../Screens/Guests';
import Overview from '../Screens/Overview';
import TimeLine from '../Screens/TimeLine';
import SignInScreen from '../Screens/Auth/SingIn';
import SignUpScreen from '../Screens/Auth/SingUp';
import LoadingScreen from '../Screens/Loading';

const AuthStack = createStackNavigator(
  {
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen }
  },
  {
    initialRouteName: 'SignIn'
  }
);

const AppStack = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    Checklist: { screen: Checklist },
    Finances: { screen: Finances },
    Guests: { screen: Guests },
    Overview: { screen: Overview },
    TimeLine: { screen: TimeLine },
    Account: { screen: AccountScreen }
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
    Loading: LoadingScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'Loading'
  }
);

export default createAppContainer(PrimaryNav);
