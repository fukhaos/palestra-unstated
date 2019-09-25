/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import HomeScreen from './src/HomeScreen';
import {Provider} from 'unstated';
import OtherScreen from './src/OtherScreen';

const App = () => (
  <Provider>
    <Router>
      <Scene>
        <Scene
          key="login"
          component={HomeScreen}
          title="Home"
          leftTitle="Other"
          onLeft={Actions.other}
        />
        <Scene key="other" component={OtherScreen} />
      </Scene>
    </Router>
  </Provider>
);

export default App;
