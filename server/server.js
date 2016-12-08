var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');

// To use on Heroku, set the environment variable:
// $ heroku set:config MONGOLAB_URL=mongodb://user:password@mongolabstuff
var db = (process.env.MONGOLAB_URL || 'mongodb://localhost/ambits');

mongoose.connect(db);
var Location = require('./locations/locationSchema');


app.use(bodyParser.json());
app.use(express.static(__dirname  +'/../client'));

app.set('views',__dirname + '/../client');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Should be refactored to go under /api
// Also, probably, to be rehandled in an external routehandler/ctrlrs
app.get('/locations', function(req, res) {
  res.send('locations go here');
});

app.post('/locations', function(req, res) {
  res.send('something something');
});

// DB testing paths; remove when endpoints are built
app.get('/db_post', function(req, res, next) {
  var elapsed = Math.floor(Math.random()*100000);
  var newLocation = new Location({
    name: 'Testy McUserson',
    geodata: elapsed
  });
  newLocation.save().then(function(newLocation) {
    console.log('POSTED: ', newLocation);
    res.json(newLocation);
  }).catch(function(err) {
    next(err);
  });
  
});

app.get('/db', function(req, res, next) {
  Location.find().then(function(locations) {
    res.json(locations);
  })
  .catch(function(err) {
    next(err);
  })
});

// To use on Heroku, must use port provided by process.env:
var port = (process.env.PORT || 3000);
app.listen(port);
console.log('Server is now listening at port ' + port);