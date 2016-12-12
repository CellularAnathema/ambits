

//private helper functions:
var validateLocation = function (current, checkin) {
  const MIN_DIST = 200; // acceptable distance between ambit loc and checkin loc

  var rad = function(x) {
    return x * Math.PI / 180;
  };
  //calculate the distance btw two points.
  var getDistance = function(p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(p2.latitude - p1.latitude);
    var dLong = rad(p2.longitude - p1.longitude);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(p1.latitude)) * Math.cos(rad(p2.latitude)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return Math.round(d); // returns the distance in meter
  };

  if (getDistance(current, checkin) < MIN_DIST) {
    return true;
  } else {
    return false;
  }
};

//public functions:
export const postCheckin = function (ambitId, callback) {
  $.ajax({
    url:'__urlgoeshere__', //TODO: define the interface
    data: {refId: ambitId},
    type: 'POST',
    contentType: 'application/json',
    sucess: function(data) {
      callback(data);
    }
  });
};

export const getAllAmbits = function(callback) {
    $.ajax({
    url:'__urlgoeshere__', //TODO: define the interface.
    data: {refId: ambitId},
    type: 'GET',
    contentType: 'application/json',
    sucess: function(data) {
      callback(data);
    }
  });
};


export const checkinAmbit = function(ambit, callback) {
  //get current location
  if (navigator.geolocation) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords);
    var coordinates = position.coords;
    if(validateLocation(ambit.location, coordinates)) {
      callback();
    } else {
      //inform user that it is not a valid checkin attempt
      console.log('please enable the navigation to use the app');
    }
  }, function(err) {
    throw err;
  }, {timeout: 10000});
 } else {
  //device does not support geolocation:
  console.log('your device does not support geolocation :(');
 }
};

export const addNewAmbit = function(ambit, callback) {
  $.ajax({
    url: '__urlgoeshere__', //TODO: define the interface.
    data: {ambit},
    type: 'post',
    contentType: 'application/json',
    sucess: function(data) {
      callback(data);
    }
  });
};


