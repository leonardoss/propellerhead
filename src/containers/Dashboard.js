import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Layout from '../layout';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import CustomModal from '../components/Widgets/CustomModal';
import CustomSnackBar from '../components/Widgets/CustomSnackBar';
import CustomTooltip from '../components/Widgets/CustomTooltip';
import ProjectCard from '../components/Widgets/ProjectCard';

const styles = theme => ({
  root: {
    margin: '30px 0 0 0',
  },
});

class Dashboard extends React.Component {
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
    return (
      <Layout>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item xs={11} md={10}>
            <Typography variant="headline" component="h3">
              Projects
            </Typography>
            {this.state.projects.map((item, i) => (
              <ProjectCard item={item} key={i} />
            ))}
            {this.state.msg !== '' && (
              <CustomSnackBar
                openSnack={this.state.openSnack}
                handleCloseSnack={this.handleCloseSnack}
                msg={this.state.msg}
              />
            )}
            <CustomTooltip handleOpen={this.handleOpen} />
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
