import React, { Component } from 'react';
import axios from 'axios';
import TableCustom from './Table';

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(this);
  }

  getData(ev) {
    axios.get('/getUsers')
      .then((response) => {
        ev.setState({ data: response.data });
      });
  }

  render() {
    return (
      <div>
        <TableCustom
          users={this.state.data}
        />
      </div>
    );
  }
}

export default App;
