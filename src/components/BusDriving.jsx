import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { iconPerson, testIcon } from "../icon";
import L from "leaflet";
import ExtraMarkers from "leaflet-extra-markers";

class BusDriving extends Component {
  render() {
    if (!this.props.isLoaded) {
      return "hi";
    } else {
      return this.props.items.map((item) => {
        // console.log(item);
        if (item.properties.linienid === "4"){
        return (
          <Marker
            icon={
              new L.ExtraMarkers.icon({
                icon: "fa-coffee",
                markerColor: "red",
                iconColor:"red",
                shape: "square",
                prefix: "fa",
                iconSize: [18, 18],
              })
            }
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
      }
      });
    }
  }
}

export default BusDriving;
