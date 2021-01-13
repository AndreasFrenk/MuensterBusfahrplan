import React, { Component } from "react";
import BusMap from "./components/map";

class Apps extends Component {
  constructor(props) {
    super(props);
    console.log("constructing");
    this.state = {
      itemsBus: [],
      itmesStop: [],
      isLoadedBus: false,
      isLoadedStops: false,
      zoom: 20,
      currensposition: [],
      positionLoaded: false,
    };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    fetch("https://rest.busradar.conterra.de/prod/fahrzeuge")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoadedBus: true,
          itemsBus: json.features,
        });
      });

    fetch("https://rest.busradar.conterra.de/prod/haltestellen")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoadedStops: true,
          itemsStop: json.features,
        });
      });
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((success) =>
        this.setState({
          currensposition: [success.coords.latitude, success.coords.longitude],
          positionLoaded: true,
        })
      );
    } else {
      console.log("Not Available");
    }
  }
  render() {
    return (
      <div>
        <BusMap
          itemsStop={this.state.itemsStop}
          itemsBus={this.state.itemsBus}
          isLoadedBus={this.state.isLoadedBus}
          isLoadedStops={this.state.isLoadedStops}
          zoom={this.state.zoom}
          currentPosition={this.state.currensposition}
          positionLoaded={this.state.positionLoaded}
        />
      </div>
    );
  }
}

export default Apps;
