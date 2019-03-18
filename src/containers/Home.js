import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../layout';
import TableCustom from '../components/Widgets/Table';

// material-ui
import { Grid, withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    margin: '30px 0 0 0',
  },
});

class Home extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  getData = () => {
    axios
      .post(
        '/update',
        {
          _id: this.props.match.params.id,
          cards: temp,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(function(response) {
        comp.setState({
          msg: response.data,
        });
        comp.handleOpenSnack();
      });
  };

  componentDidMount = () => {
    // this.getData(this);
  };

  render() {
    return (
      <Layout>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item xs={8}>
            <Typography variant="headline" component="h3">
              Customers
            </Typography>
            <TableCustom users={this.state.data} />
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles)(Home);
