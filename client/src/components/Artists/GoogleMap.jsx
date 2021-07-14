import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
class GoogleMap extends Component {
 render() {
   return (
      <>
         <Map
            google={this.props.google}
            zoom={19}
            style={{
               width: '350px',
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
  apiKey: ('AIzaSyCr6DX1zFp38DKxr9C-5grSmt1IVDGfCAo')
 })(GoogleMap);

