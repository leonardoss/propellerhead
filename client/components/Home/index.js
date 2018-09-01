import React, { Component } from 'react';
import axios from 'axios';
import TableCustom from '../Widgets/Table';

class Home extends Component {
  constructor() {
    super();
    this.state = { data: [] };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(this);
  }

  getData() {
    axios.get('/getUsers')
      .then((response) => {
        this.setState({ data: response.data });
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

export default Home;
