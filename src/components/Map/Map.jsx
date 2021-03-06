import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  GoogleMapLoader,
  Marker
} from "react-google-maps";

import MarkerPng from "../../images/marker.png"

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC0EWk1yeB-ZpIYvjLVosYmJc5eJMq41p4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, width: "100%"}} />,
    containerElement: <div style={{ height: `100%` , width: "100%"}} />,
    mapElement: <div style={{ height: `100%` , width: "100%"}} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
      <GoogleMap defaultZoom={17} defaultCenter={{ lat: 49.000982215182134, lng: 21.237334978470283 }}>
        {(
          <Marker defaultIcon={MarkerPng} position={{ lat: 49.000982215182134, lng: 21.237334978470283 }} />
        )}
      </GoogleMap>
));

export default Map
