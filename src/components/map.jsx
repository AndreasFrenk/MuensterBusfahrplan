import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import BusDriving from "./BusDriving";
import L from "leaflet";
import { iconPerson, testIcon } from "../icon";
import BusDialog from "./BusDialog";
import ReactDOM from 'react-dom';

let dialog = false;
class Map extends Component {
  dialog = false;  
  openDialog(){
    dialog = true;
    ReactDOM.render(<BusDialog />, document.querySelector('#root'));
    // return (
    //   <div>
    //     <p>test</p>
    //   </div>
    // )
  }
  render() {
    if (!this.props.isLoaded) {
      return <div>wait</div>;
    } else {
      // if (!dialog){
        if (true){
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
          <BusDriving items={this.props.items} isLoaded={this.props.isLoaded} />
       </MapContainer>
       <button style={{position:'relative'}}onClick={this.openDialog}>TEST</button>
       </div>
      );
    }
    else {
      return <div>
        <p>test</p>
      </div>;
    }
    }
  }
}

export default Map;
