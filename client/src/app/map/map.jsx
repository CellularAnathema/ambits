import React, {Component} from 'react';
import loadGoogleMapsAPI from 'load-google-maps-api';

class Map extends Component {
  constructor(props, context) {
    super(props, context);

    this.mapInstance = {};
    this.googleMaps = {};
    this.centerMarker = {};
  }
  componentDidMount() {
    // This is public; restricted by IP
    loadGoogleMapsAPI({
      key: "AIzaSyAHJfNJp8pbRxf_05L1TIm5ru-Dvcla-Nw",
      v: '3.25'
    }).then((googleMaps) => {
      this.initMap(googleMaps); // sets instance vars atm
      var map = this.mapInstance;

      googleMaps.event.addListener(map, 'drag', () => {
        var centerLatLng = map.getCenter();
        this.centerMarker.setPosition(centerLatLng);
      });

    });
  }

  initMap(googleMaps) {
    console.log('called initMap');
    var hackReactor = { lat: 37.791066, lng: -122.3991683 }
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new googleMaps.Map(document.getElementById('map'), {
      zoom: 17,
      center: hackReactor
    });
    var marker = new googleMaps.Marker({
      position: hackReactor,
      map: map
    });
    // Awful, impure pattern, fix:
    this.mapInstance = map;
    this.centerMarker = marker;
    this.googleMaps = googleMaps;
  }

  render() {
    return (
      <div id="map"></div>
    )
  }
}

export default Map;