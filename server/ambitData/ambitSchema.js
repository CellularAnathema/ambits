var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ambitSchema = new Schema({
  refName: {type: String, index: true}, //three letters and then a number for repeats
  name: String, //the name displayed to the user.
  //user (a DocumentId associated with the user that created it)
  coords: {
    latitude: Number,
    longitude: Number
  },
  weekdays: {
    mon: Boolean,
    tue: Boolean,
    wed: Boolean,
    thu: Boolean,
    sat: Boolean,
    sun: Boolean
  },
  startDate: Date,
  checkIns: [Date] // a history of successful check-ins
  //time (when during the day are you supposed to check in)
  //repeats (every week? every other week? is this necessary?)
});

var Ambit = mongoose.model('Ambit', locationSchema);

module.exports = Ambit;
