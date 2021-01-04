import React, { Component } from "react";
import Map from "./components/map";

class Apps extends Component {
  constructor(props) {
    super(props);
    console.log("constructing");
    this.interval = 0;
    this.state = {
      items: [],
      isLoaded: false,
      currentCount: 0,
    };
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount + 1
    })
    if(this.state.currentCount >= 10) {
      this.getData();
      this.setState({
        currentCount: 0
      });
    }
  }

  componentDidMount() {
    this.getData();
    setInterval(this.timer.bind(this), 1000);
  }

  getData() {
    fetch("https://rest.busradar.conterra.de/prod/fahrzeuge")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json.features,
        });
      })
  }

  render() {
    return (
      <div>
        <Map items={this.state.items} isLoaded={this.state.isLoaded} />
      </div>
    );
  }
}

export default Apps;
