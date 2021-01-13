import React, { Component } from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import BusDriving from "./BusDriving";
import BusDialogV2 from "./BusDialogV2";


class Map extends Component {
  render() {
    if (!this.props.isLoaded) {
      return <div>wait</div>;
    } else {
      return (
        <div>
          <MapContainer
            center={[51.961563, 7.628202]}
            zoom={13}
            scrollWheelZoom={true}
          >

            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <BusDriving items={this.props.items} isLoaded={this.props.isLoaded} filter={this.props.filter} />
          </MapContainer>
          <BusDialogV2 busStops={this.props.busStops} AllLines={this.props.AllLines} filter={this.props.filter} filterBusses={this.props.filterBusses} AllBusses={this.props.AllBusses} items={this.props.items} isLoaded={this.props.isLoaded} filteredBusses={this.props.filteredBusses} />
        </div>
      );
    }
  }
}

export default Map;
