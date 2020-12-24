import React, { Component } from "react";

class BusApi extends Component {
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
    var { items, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map((item) => {
              return (
                <li key={items.indexOf(item)}>
                  <p>Buslinie: {item.properties.linienid}</p> Richtung:{" "}
                  {item.properties.richtungstext}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}

export default BusApi;
