import React, { Component } from 'react';
import axios from 'axios';
import TableCustom from '../../components/Widgets/Table';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    margin: '30px 0 0 0',
  },
});

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
    axios.get('/getUsers').then(response => {
      this.setState({ data: response.data });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Typography variant="headline" component="h3">
              Customers
            </Typography>
            <TableCustom users={this.state.data} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
