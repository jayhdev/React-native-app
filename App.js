import React from 'react';
import { YellowBox } from 'react-native';

import MainApp from './src/App';

YellowBox.ignoreWarnings(['Require cycle:']);

export default function App() {
  return <MainApp />;
}
