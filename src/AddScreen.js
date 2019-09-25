import React, {Component} from 'react';
import {View, FlatList, TextInput} from 'react-native';
import {ListItem, Text, Input, Button} from 'native-base';
import {Subscribe} from 'unstated';
import TodoContainer from './containers/TodoContainer';
import {Actions} from 'react-native-router-flux';

export default class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <Subscribe to={[TodoContainer]}>
        {todo_container => {
          const {value} = this.state;
          const {data} = todo_container.state;

          return (
            <View style={{padding: 10}}>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  marginBottom: 20,
                }}
                placeholder="New Item"
                value={value}
                onChangeText={value => {
                  this.setState({value});
                }}
              />
              <Button
                full
                onPress={() => {
                  todo_container.addItem(value);
                  Actions.pop();
                }}>
                <Text>ADD</Text>
              </Button>
            </View>
          );
        }}
      </Subscribe>
    );
  }
}
