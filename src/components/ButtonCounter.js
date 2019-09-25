import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'native-base';
import {Subscribe} from 'unstated';
import MyContainer from '../containers/MyContainer';

export default class ButtonCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      clicks: 0,
    };
  }

  render() {
    return (
      <Subscribe to={[MyContainer]}>
        {container => {
          const {counter} = container.state;
          return (
            <Button
              full
              danger={this.state.clicks > 3}
              onPress={() => {
                this.setState({clicks: this.state.clicks + 1});
                container.setState({counter: counter + 1});
              }}>
              <Text> {counter} </Text>
            </Button>
          );
        }}
      </Subscribe>
    );
  }
}
