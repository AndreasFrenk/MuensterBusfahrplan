import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { iconPerson } from "../icon";
class BusDriving extends Component {
  render() {
    if (!this.props.isLoaded) {
      return "hi";
    } else {
      console.log(this.props.items[0].properties.linienid);
      return this.props.items.map((item) => {
        return (
          <Marker
            icon={iconPerson}
            key={this.props.items.indexOf(item)}
            position={[
              item.geometry.coordinates[1],
              item.geometry.coordinates[0],
            ]}
          >
            <Popup>
              Linie: {item.properties.linienid} <br /> Richtung:{" "}
              {item.properties.richtungstext}
            </Popup>
          </Marker>
        );
      });
    }
  }
}

export default BusDriving;
