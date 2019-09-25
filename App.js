/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import HomeScreen from './src/HomeScreen';

const App = () => (
  <Router>
    <Scene>
      <Scene key="login" component={HomeScreen} title="Home" />
    </Scene>
  </Router>
);

export default App;
