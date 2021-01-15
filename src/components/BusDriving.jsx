import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { busIconRed, busIconGreen, busIconYellow } from "../icon";
import L from "leaflet";
import ExtraMarkers from "leaflet-extra-markers";
import { v4 as uuidv4 } from "uuid";

class BusDriving extends Component {
  render() {
    if (!this.props.isLoadedBus) {
      return "hi";
    } else {
      console.log(this.okay());
      return this.okay();
    }
  }

  okay() {
    return this.props.itemsBus.map(function (item) {
      if (item.properties.delay > 20) {
        return (
          <div>
            <Marker
              // icon={busIconRed}
              key={uuidv4()}
              position={[
                item.geometry.coordinates[1],
                item.geometry.coordinates[0],
              ]}
              opacity="1"
              size="30px"
            >
              <Popup>
                Linie: {item.properties.linienid} <br /> Richtung:{" "}
                {item.properties.richtungstext}
              </Popup>
            </Marker>
            <Marker
              icon={
                new L.ExtraMarkers.icon({
                  shape: "",
                  innerHTML: item.properties.linienid.toString(),
                  color: "red",
                  iconColor: "red",
                  iconSize: [24, 24],
                  iconAnchor: [2, 0],
                })
              }
              key={uuidv4()}
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
          </div>
        );
      } else if (item.properties.delay >= 10) {
        return (
          <div>
            <Marker
              // icon={busIconYellow}
              key={uuidv4()}
              position={[
                item.geometry.coordinates[1],
                item.geometry.coordinates[0],
              ]}
              opacity="1"
              size="30px"
            >
              <Popup>
                Linie: {item.properties.linienid} <br /> Richtung:{" "}
                {item.properties.richtungstext}
              </Popup>
            </Marker>
            <Marker
              icon={
                new L.ExtraMarkers.icon({
                  shape: "",
                  innerHTML: item.properties.linienid.toString(),
                  color: "red",
                  iconColor: "red",
                  iconSize: [24, 24],
                  iconAnchor: [2, 0],
                })
              }
              key={uuidv4()}
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
          </div>
        );
      } else {
        return (
          <div>
            <Marker
              // icon={busIconGreen}
              key={uuidv4()}
              position={[
                item.geometry.coordinates[1],
                item.geometry.coordinates[0],
              ]}
              opacity="1"
              size="30px"
            >
              <Popup>
                Linie: {item.properties.linienid} <br /> Richtung:{" "}
                {item.properties.richtungstext}
              </Popup>
            </Marker>
            <Marker
              icon={
                new L.ExtraMarkers.icon({
                  shape: "",
                  innerHTML: item.properties.linienid.toString(),
                  color: "red",
                  iconColor: "red",
                  iconSize: [24, 24],
                  iconAnchor: [2, 0],
                })
              }
              key={uuidv4()}
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
          </div>
        );
      }
    });
  }
}
export default BusDriving;
