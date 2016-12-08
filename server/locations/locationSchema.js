var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var locationSchema = new Schema({
  name: String, //e.g. 'Gym', 'Library' (for the user);
  geodata: Number //replace with whatever we use to store this location
  //radius (should it be fixed or should it vary?)
  //user for objectId
  //description for String
});

var Location = mongoose.model('Location', locationSchema);

module.exports = Location;
