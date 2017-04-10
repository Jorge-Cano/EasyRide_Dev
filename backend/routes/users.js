var express = require('express');
var router = express.Router();
var User = require('../models/user')


/* GET home page. */
router.get('/:id', function(req, res, next) {
  id = req.params.id;
  User.findById(id, function(err, driver){
    if (err) {
      console.log("Driver.findById error: ", err);
    } else {
      res.status(200).json({
        status: 'OK',
        driver: driver
      });
    }
  });
});

router.post('/', function(req, res, next){
  var newUser = new User({
    Auth0_id: req.body.auth0_id,
    first: req.body.first,
    last: req.body.last,
    phone: req.body.phone,
    email: req.body.email,
    zip: req.body.zip,
    cc: req.body.cc,
    ex_date: req.body.ex_date,
    door_to_door: req.body.door_to_door,
    wheelchair: req.body.wheelchair,
    bag_help: req.body.bag_help
  });

   console.log('newUser object test:', newUser);

  newUser.save(function(err, user){
    if (err) {
      res.status(500).send({
        status: 'Error',
        error: err
      });
    } else {
      res.status(200).json({
        status: 'OK',
        user: user
      });
    }
  });
});

/*this should only be for update of the entire profile,
  since CC info is here */
router.put('/', function(req, res, next){
  User.findByIdAndUpdate(req.body.id, {
    Auth0_id: req.body.auth0_id,
    _id: req.body.id,
    first: req.body.first,
    last: req.body.last,
    phone: req.body.phone,
    email: req.body.email,
    zip: req.body.zip,
    cc: req.body.cc,
    ex_date: req.body.ex_date,
    door_to_door: req.body.door_to_door,
    wheelchair: req.body.wheelchair,
    bag_help: req.body.bag_help
  }, function(err, student) {
    if (err) console.log(err);
    res.json({
      message: "User updated!",
      id: req.body.id,
      newname: req.body.name
    })
  });
});

router.patch('/', function(req, res, next){
  User.findByIdAndUpdate(req.body.id, {
    Auth0_id: req.body.auth0_id,
    _id: req.body.id,
    first: req.body.first,
    last: req.body.last,
    phone: req.body.phone,
    email: req.body.email,
    zip: req.body.zip,
    door_to_door: req.body.door_to_door,
    wheelchair: req.body.wheelchair,
    bag_help: req.body.bag_help
  }, function(err, student) {
    if (err) console.log(err);
    res.json({
      message: "User updated!",
      id: req.body.id,
      newname: req.body.name
    })
  });
});

router.delete('/', function(req, res, next){
  User.findByIdAndRemove(req.body.id, function(err, user){
    if(err) {
      console.log('Error Deleting record: ', err);
    } else {
      res.json({
        status: 'deleted!',
        user: user
      })
    }
  })
});

module.exports = router;


