var mongoose = require('mongoose');
var driverSchema = new mongoose.Schema({

  // things to consider Auth0_id:
  // mapping schedules for driver & customer*

  Auth0_id: { type: String, required: true, unique: true },
  first: { type: String, required: true },
  last: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  zip: { type: Number, required: true },
  able_door_to_door: { type: Boolean, required: true },
  able_wheelchair: { type: Boolean, required: true },
  able_bag_help: { type: Boolean, required: true },
  vehicle_type: { type: String, required: true },


});
var driver = mongoose.model('Driver', driverSchema);
module.exports = driver;
