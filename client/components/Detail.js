import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CustomPaper from './Widgets/CustomPaper';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  paper: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  card: {
    width: '40%',
    float: 'left',
    margin: '10px',
    paddingBottom: theme.spacing.unit * 2,
  },
  modal: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      cards: [],
      openModal: false,
      openSnack: false,
      textCard: '',
      msg: '',
      vertical: 'bottom',
      horizontal: 'center',
    };

    this.getData = this.getData.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpenSnack = this.handleOpenSnack.bind(this);
    this.handleCloseSnack = this.handleCloseSnack.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.insertCard = this.insertCard.bind(this);
  }

  componentDidMount() {
    this.getData(this);
  }

  onClickSave() {
    this.insertCard(this);
  }

  getData(comp) {
    axios.get('/getUsers?id=' + this.props.match.params.id)
      .then(function(response) {
        response.data.map(row => {
          comp.setState({
            data: row,
            cards: row.cards,
          });
        });
      });
  }

  insertCard() {
    const temp = this.state.cards;
    temp.push({ text: this.state.textCard });

    axios.post('/update',
      {
        _id: this.props.match.params.id,
        cards: temp,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(function(response) {
      this.setState({
        msg: response.data
      });
      this.handleOpenSnack();
    });
  }

  handleOpen() {
    this.setState({ openModal: true });
  }

  handleClose() {
    this.setState({ openModal: false });
  }

  handleOpenSnack() {
    this.setState({ openSnack: true });
  }

  handleCloseSnack() {
    this.setState({ openSnack: false });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { classes } = this.props;
    const { vertical, horizontal, openSnack } = this.state;
    return (
      <div>
        <CustomPaper data={this.state.data} />
        <Divider />
        {this.state.msg !== '' && <Snackbar anchorOrigin={{ vertical, horizontal }} open={openSnack} onClose={this.handleCloseSnack} ContentProps={{ 'aria-describedby': 'message-id' }} message={<span id="message-id">{this.state.msg}</span>}/>}
        {this.state.cards.map((row, i) => {
          return (
            <Card className={classes.card} key={i}>
              <CardContent>
                <Typography variant="headline" component="h3">{row.text}</Typography>
              </CardContent>
            </Card>
          );
        })}
        <Tooltip title="Add Note">
          <Button variant="fab" color="secondary" className={classes.button} onClick={this.handleOpen}>
            <AddIcon />
          </Button>
        </Tooltip>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openModal}
          onClose={this.handleClose}
        >
          <div className={classes.modal}>
            <form className={classes.container} noValidate autoComplete="off">
              <Typography variant="title" id="modal-title">
                Insert a new note
              </Typography>
              <Divider />
              <TextField
                id="multiline-static"
                label="type"
                multiline
                rows="4"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                fullWidth
                name="textCard"
                value={this.state.text}
                onChange={this.handleInputChange}
              />
              <br />
              <br />
              <br />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={this.onClickSave}
              >
                Save
              </Button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

Detail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Detail);
