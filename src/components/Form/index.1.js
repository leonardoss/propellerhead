import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import FormHeader from './FormHeader/FormHeader';
import CustomInput from '../Common/CustomInput';
import Feedback from './FormFeedback/FormFeedback';
import { withRouter } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';

import LockIcon from '@material-ui/icons/LockOutlined';
import {
  Typography,
  Grid,
  Avatar,
  Button,
  Divider,
  Paper,
  Input,
  InputLabel,
  FormControl,
} from '@material-ui/core';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: { username: '', password: '', general: '' },
      usernameValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  errorClass(error) {
    return error.length === 0 ? '' : 'error';
  }

  validateField = (fieldName, value) => {
    let fieldErrors = this.state.errors,
      usernameValid = this.state.usernameValid,
      passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'username':
        usernameValid = value.length >= 4;
        fieldErrors.username = usernameValid
          ? ''
          : 'Please, fill the field (minimum 4 characteres)';
        break;
      case 'password':
        passwordValid = value.length >= 4;
        fieldErrors.password = passwordValid
          ? ''
          : 'Please, fill the field (minimum 4 characteres)';
        break;
      default:
        break;
    }
    this.setState(
      {
        errors: fieldErrors,
        usernameValid: usernameValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  };

  validateForm = () => {
    this.setState({
      formValid: this.state.usernameValid && this.state.passwordValid,
    });
  };

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.username === 'admin' && this.state.password === 'admin') {
      const userInfo = {
        displayName: 'Leonardo',
        email: 'leonardo@santopixel.com.br',
      };
      console.log('this.props', this.props);
      this.props.isAuthenticated(userInfo);
      this.props.history.push('/home');
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          general: 'Invalid credentials',
        },
      });
    }
  };

  render() {
    const { state } = this;
    const { classes, errorMessage } = this.props;
    return (
      <form
        id="login-form"
        action="/"
        method="post"
        className="login-form"
        onSubmit={event => this.handleSubmit(event)}
      >
        <section>
          <fieldset>
            <legend>form login</legend>
            <div
              className={`form-item ${this.errorClass(
                this.state.errors.username
              )}`}
            >
              <label htmlFor="username">
                <span className="sr-only">USERNAME</span>
                <CustomInput
                  type="text"
                  validate="type-required"
                  name="username"
                  placeholder="USERNAME"
                  value={this.state.username}
                  handlerChange={event => this.handleUserInput(event)}
                />
                <Feedback message={this.state.errors.username} />
              </label>
            </div>
            <div
              className={`form-item ${this.errorClass(
                this.state.errors.password
              )}`}
            >
              <label htmlFor="password">
                <span className="sr-only">PASSWORD</span>
                <CustomInput
                  type="password"
                  validate="type-required"
                  name="password"
                  placeholder="PASSWORD"
                  value={this.state.password}
                  handlerChange={event => this.handleUserInput(event)}
                />
                <Feedback message={this.state.errors.password} />
              </label>
            </div>
            <div className="form-item">
              <input
                type="submit"
                value="Sign in"
                className="btn-submit"
                disabled={!this.state.formValid}
              />
            </div>
          </fieldset>
        </section>
      </form>
    );
  }
}

Form.propTypes = {
  isAuthenticated: PropTypes.func,
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
)(Form);
