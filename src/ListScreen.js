import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ListItem} from 'native-base';
import {Subscribe} from 'unstated';
import TodoContainer from './containers/TodoContainer';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Subscribe to={[TodoContainer]}>
        {todo_container => {
          const {data} = todo_container.state;

          return (
            <View>
              <FlatList
                data={data}
                renderItem={({item}) => (
                  <ListItem iconRight>
                    <Text>{item}</Text>
                  </ListItem>
                )}
                keyExtractor={item => item}
              />
            </View>
          );
        }}
      </Subscribe>
    );
  }
}
