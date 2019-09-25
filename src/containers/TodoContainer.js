import {Container} from 'unstated';

export default class TodoContainer extends Container {
  state = {
    data: ['oi'],
  };

  addItem = value => {
    this.setState({data: [...this.state.data, value]});
  };
}
