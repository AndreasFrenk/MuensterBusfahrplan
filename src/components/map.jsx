import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import BusDriving from "./BusDriving";
import BusDialogV2 from "./BusDialogV2";

import BusStops from "./BusStops";

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
          <BusDialogV2 busStops={this.props.busStops} AllLines={this.props.AllLines} 
          filter={this.props.filter} filterBusses={this.props.filterBusses} AllBusses={this.props.AllBusses} 
          items={this.props.items} isLoaded={this.props.isLoaded} filteredBusses={this.props.filteredBusses} />
          <BusDriving
            itemsBus={this.props.itemsBus}
            isLoadedBus={this.props.isLoadedBus}
          />
          <BusStops
            itemsStop={this.props.itemsStop}
            isLoadedStops={this.props.isLoadedStops}
          />
          </MapContainer>
        </div >
      );
    }
  }
}

export default BusMap;
