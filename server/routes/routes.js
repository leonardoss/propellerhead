const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Users = require('../../models/Users');

router.get('/', function(req, res){
  res.render('index');
});

router.route('/update')
  .post(function(req, res) {
    const doc = {
      cards: req.body.cards
    };
    Users.update({_id: req.body._id}, doc, 
      function(err, result) {
        if (err)
          res.send(err);
        res.send('Users successfully updated!');
      });
});

router.get('/getUsers',function(req, res) {
  const query = req.query.id ? {$and: [ {_id: req.query.id}]} : {};

  Users.find(query, function(err, expenses) {
    if (err)
      res.send(err);
    res.json(expenses);
  });

});

module.exports = router;