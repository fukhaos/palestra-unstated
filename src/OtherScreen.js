import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import ButtonCounter from './components/ButtonCounter';

export default class OtherScreen extends PureComponent {
  render() {
    return (
      <View>
        <ButtonCounter />
      </View>
    );
  }
}
