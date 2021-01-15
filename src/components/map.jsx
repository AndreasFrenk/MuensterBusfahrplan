import React, { Component, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  withLeaflet,
} from "react-leaflet";
import BusDriving from "./BusDriving";
import BusStops from "./BusStops";
import L, { map } from "leaflet";
import { iconPerson, testIcon } from "../icon";

const position = [51.961563, 7.628202];

class BusMap extends Component {
  render() {
    const center = (props) => {
      if (this.props.positionLoaded) {
        return this.props.currentPosition;
      } else {
        return [51.961563, 7.628202];
      }
    };
    if (!this.props.isLoadedBus) {
      return <div>wait</div>;
    } else {
      console.log();
      console.log(this.props.currentPosition);
      const polyline = [
        [
          this.props.itemsBus[0].geometry.coordinates[1],
          this.props.itemsBus[0].geometry.coordinates[0],
        ],
        [
          this.props.itemsBus[1].geometry.coordinates[1],
          this.props.itemsBus[1].geometry.coordinates[0],
        ],
        [
          this.props.itemsBus[2].geometry.coordinates[1],
          this.props.itemsBus[2].geometry.coordinates[0],
        ],
      ];
      return (
        <div>
          <MapContainer
            center={center()}
            zoom={this.props.zoom}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <BusDriving
              itemsBus={this.props.itemsBus}
              isLoadedBus={this.props.isLoadedBus}
            />
            <BusStops
              itemsStop={this.props.itemsStop}
              isLoadedStops={this.props.isLoadedStops}
            />
            <Polyline pathOptions={{ color: "lime" }} positions={polyline} />
          </MapContainer>
        </div>
      );
    }
  }
}

export default BusMap;
