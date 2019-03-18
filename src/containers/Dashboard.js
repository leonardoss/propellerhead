import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Layout from '../layout';
import CustomModal from '../components/Widgets/CustomModal';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
  root: {
    margin: '30px 0 0 0',
  },
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  card: {
    width: '40%',
    float: 'left',
    margin: '10px',
    paddingBottom: theme.spacing.unit * 2,
  },
});

class Dashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      openModal: false,
      openSnack: false,
      newProjectTitle: '',
      msg: '',
      user: props.user,
      projects: props.user.projects,
      vertical: 'bottom',
      horizontal: 'center',
    };
  }

  onClickSave = () => {
    this.insertProject(this);
  };

  insertProject = comp => {
    const temp = this.state.projects;
    temp.push({ title: this.state.newProjectTitle });

    axios
      .post(
        '/update',
        {
          _id: this.state.user.id,
          projects: temp,
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

  handleOpen = () => {
    this.setState({ openModal: true });
  };

  handleClose = () => {
    this.setState({ openModal: false });
  };

  handleOpenSnack = () => {
    this.setState({ openSnack: true });
  };

  handleCloseSnack = () => {
    this.setState({ openSnack: false });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { vertical, horizontal, openSnack } = this.state;

    console.log('this.state', this.state);
    console.log('this.props', this.props);
    console.log('this.props.user.projects', this.props.user.projects);
    return (
      <Layout>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item xs={11} md={10}>
            <Typography variant="headline" component="h3">
              Projects
            </Typography>
            {this.state.projects.map((item, i) => {
              return (
                <Card className={classes.card} key={i}>
                  <CardContent>
                    <Typography variant="headline" component="h3">
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
            {this.state.msg !== '' && (
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={openSnack}
                onClose={this.handleCloseSnack}
                ContentProps={{ 'aria-describedby': 'message-id' }}
                message={<span id="message-id">{this.state.msg}</span>}
              />
            )}
            <Tooltip title="Add Note">
              <Button
                variant="fab"
                color="secondary"
                className={classes.button}
                onClick={this.handleOpen}
              >
                <AddIcon />
              </Button>
            </Tooltip>
            <CustomModal
              openModal={this.state.openModal}
              handleInputChange={this.handleInputChange}
              handleClose={this.handleClose}
              onClickSave={this.onClickSave}
              text={this.state.newProjectTitle}
            />
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  withRouter,
  connect(
    store => ({
      user: store.UserReducer.user,
    }),
    {
      ...actions,
    }
  )
)(Dashboard);
