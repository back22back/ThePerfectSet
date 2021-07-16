/* global google */
import React, { useState, useEffect } from 'react';
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

const Map = ({ bookings }) => {
  const [directions, setDirections] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const waypoints = bookings.map(booking => ({
      location: { lat: booking.latitude, lng: booking.longitude },
      stopover: true
    }));
    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: 'DRIVING',
        waypoints: waypoints
      },
      (result, status) => {
        console.log(result);
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          setError(result);
        }
      }
    );
  }, []);

  const GoogleMapExample = withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat: 37.784172, lng: -122.433104 }}
      defaultZoom={5}
    >
      <DirectionsRenderer
        directions={directions}
      />
    </GoogleMap>
  ));

  return (
    <div>
      <GoogleMapExample
        containerElement={<div style={{ height: `500px`, width: "500px" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

const MapLoader = withScriptjs(Map);

export default Map;