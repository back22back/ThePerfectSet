import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLE_API } from '../../../../config.js';

class GoogleMap extends Component {
   // state = currentLocation
 render() {
   return (
      <>
         <Map
            google={this.props.google}
            zoom={19}
            style={{
               width: '375px',
               height: '300px'
            }}
            initialCenter={{
               lat: 30.2656,
               lng: -97.7497
         }}>
            <Marker />
         </Map>
      </>
   );
 }
};

export default GoogleApiWrapper({
  apiKey: (GOOGLE_API)
 })(GoogleMap);

