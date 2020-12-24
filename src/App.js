import React, { Component } from "react";
import BusApi from "./components/bus-api";
import Map from "./components/map";

class Apps extends Component {
  constructor(props) {
    super(props);
    console.log("constructing");
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://rest.busradar.conterra.de/prod/fahrzeuge")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json.features,
        });
      });
  }
  render() {
    return <Map items={this.state.items} isLoaded={this.state.isLoaded} />;
  }
}

export default Apps;
