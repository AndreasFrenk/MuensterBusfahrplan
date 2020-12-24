import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import BusDriving from "./BusDriving";

class Map extends Component {
  render() {
    if (!this.props.isLoaded) {
      return <div>wait</div>;
    } else {
      console.log(this.props.items[0].geometry.coordinates[0]);
      return (
        <MapContainer
          center={[51.961563, 7.628202]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <BusDriving items={this.props.items} isLoaded={this.props.isLoaded} />
          <Marker position={[51.961563, 7.628202]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Marker position={[51.961563, 7.678802]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      );
    }
  }
}

export default Map;
