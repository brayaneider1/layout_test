import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import mark from '../../../../assets/marker.svg'

import "./Location.scss";
const position = [51.505, -0.09]
const positionMarker = [51.5049866, -0.03]



const pointerIcon = new L.Icon({
    iconUrl: mark,
    iconRetinaUrl: mark,
    iconAnchor: [200, 55],
    popupAnchor: [10, -44],
    iconSize: [300, 100],
    shadowUrl: '../assets/marker-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [20, 92],
  })
export default () => {
  return (
    <div>
        <Map className="maps" center={position}  scrollWheelZoom={false} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker icon={pointerIcon} position={positionMarker}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>

  </Map>
 
    </div>
  );
};
