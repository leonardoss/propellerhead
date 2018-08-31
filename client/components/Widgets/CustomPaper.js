import React, { Component } from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    marginTop: 20,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    paddingLeft: 40,
    paddingRight: 100,
  }
});

class CustomPaper extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">{this.props.data.name}</Typography>
        <br />
        <Typography variant="body2" gutterBottom>Email</Typography>
        <Typography variant="subheading">{this.props.data.email}</Typography>
        <br />
        <Typography variant="body2" gutterBottom>ID</Typography>
        <Typography variant="subheading">{this.props.data._id}</Typography>
        <br />
        <Typography variant="body2" gutterBottom>Status</Typography>
        <Typography variant="subheading">{this.props.data.status}</Typography>
        <br />
        <Typography variant="body2" gutterBottom>Creation Date</Typography>
        <Typography variant="subheading">{this.props.data.creationDate}</Typography>
      </Paper>
    );
  }
}

CustomPaper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomPaper);
