const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  name: String,
  email: String,
  creationDate: Date,
  status: String,
  cards: {
    text : String
  }
});

module.exports = mongoose.model('Users', expenseSchema);