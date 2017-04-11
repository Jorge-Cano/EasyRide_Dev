var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({

  // things to consider Auth0_id:
  Auth0_id: { type: String, required: true, unique: true },
  first: { type: String, required: true },
  last: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cc: { type: Number, required: true, unique: true },
  ex_date: { type: String, required: true },
  zip: { type: Number, required: true },
  door_to_door: { type: Boolean, required: true },
  wheelchair: { type: Boolean, required: true },
  bag_help: { type: Boolean, required: true }

});
var user = mongoose.model('User', userSchema);
module.exports = user;
