var Location = require('./locationSchema');
var Q = require('q');

var findLocation = q.nbind(Location.find, Location);
var findAllLocations = q.nbind(Location.find, Location);
var createLocation = q.nbind(Location.find, Location);

module.exports.addLocation = function (req, res, next) {
  //the user submits a new location
  //if that user has not already submitted a location with that name
  //then the location is added to our database

  var name = req.body.name;
  var geodata = req.body.geodata;

  findLocation({name: name}) //should check per user as well
    .then(function(found){
      if (found) {
        return next(new Error('a location with this name already exits'));
      } else{
        var newLocation = {
          name: name,
          geodata: geodata
        };

        return createLocation(geodata);
      }
    })
    .then(function (createdLocation) {
      if (createdLocation) {
        res.json(createdLink);
      }
    })
    .fail(function (error) {
      next(error);
    });
};

module.exports.validateCheckIn = function(req, res, next) {
  //given a particular location name, check if the geodata for the users
  //current location matches that location
  //if the user is trying to check in for a Gym task,
  //but they are not in the gym, the server responds with a message
  //if the user is at the gym, the server goes to the next .then statement

  var name = req.body.name;
  var userGeodata = req.body.geodata;

  findLocation({name: name})
    .then(function(taskLocation) {
      if (taskLocation.geodata === userGeodata) {
        next(location);
      } else {
        res.send('No Cheating! You are not at the right location');
        //replace this if we need send a different validation refusal
      }
    });
};
