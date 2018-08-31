import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Routes from './routes/routes';

//material-ui
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

ReactDOM.render(
  <HashRouter>
    <div>
      <CssBaseline />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Propellerhead - Leonardo Silva - Developer Technical Test
              </Typography>
            </Toolbar>
          </AppBar>
          <br />
          <Routes />
      </Grid>
    </div>
  </HashRouter>, document.getElementById('root')
);