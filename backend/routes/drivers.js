var express = require('express');
var router = express.Router();
var Driver = require('../models/driver')

/* GET home page. */
router.get('/', function(req, res, next) {
  Driver.findById(id, function(err, driver){
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
  var newDriver = new Driver({
    first: req.body.first,
    last: req.body.last,
    phone: req.body.phone,
    email: req.body.email,
    zip: req.body.zip,
    able_door_to_door: req.body.able_door_to_door,
    able_wheelchair: req.body.able_wheelchair,
    able_bag_help: req.body.able_bag_help,
    vehicle_type: req.body.vehicle_type
  });

   console.log('newDriver object test:', newDriver);

  newDriver.save(function(err, driver){
    if (err) {
      res.status(500).send({
        status: 'Error',
        error: err
      });
    } else {
      res.status(200).json({
        status: 'OK',
        driver: driver
      });
    }
  });
});

router.put('/', function(req, res, next){
  Driver.findByIdAndUpdate(req.body.id, {
    first: req.body.first,
    last: req.body.last,
    phone: req.body.phone,
    email: req.body.email,
    zip: req.body.zip,
    able_door_to_door: req.body.able_door_to_door,
    able_wheelchair: req.body.able_wheelchair,
    able_bag_help: req.body.able_bag_help,
    vehicle_type: req.body.vehicle_type
  }, function(err, student) {
    if (err) console.log(err);
    res.json({
      message: "Driver updated!",
      id: req.body.id,
      newname: req.body.name
    })
  });
});


router.delete('/', function(req, res, next){
  Driver.findByIdAndRemove(req.body.id, function(err, driver){
    if(err) {
      console.log('Error Deleting record: ', err);
    } else {
      res.json({
        status: 'deleted!',
        driver: driver
      })
    }
  })
});



module.exports = router;

//********************************************

