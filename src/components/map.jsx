import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import BusDriving from "./BusDriving";
import L from "leaflet";
import { iconPerson, testIcon } from "../icon";

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
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <BusDriving items={this.props.items} isLoaded={this.props.isLoaded} />
        </MapContainer>
      );
    }
  }
}

export default Map;
