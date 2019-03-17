import React from 'react';

import Layout from '../layout';
import Form from '../components/Form';
import { Grid } from '@material-ui/core';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }

  render() {
    return (
      <Layout>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item xs={3}>
            <Form />
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

export default Login;
