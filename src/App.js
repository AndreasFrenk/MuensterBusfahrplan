import React, { Component } from "react";
<<<<<<< HEAD
import Map from "./components/map";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataHandling from './components/DataHandling';
=======
import BusMap from "./components/map";

>>>>>>> feature/icon
class Apps extends Component {
  constructor(props) {
    super(props);
    this.interval = 0;
    this.datahandling = new DataHandling;
    this.state = {
<<<<<<< HEAD
      items: [],
      isLoaded: false,
      currentCount: 0,
      filteredBusses: [],
      AllBusses: [],
      filter: [],
      AllLines: [],
=======
      itemsBus: [],
      itmesStop: [],
      isLoadedBus: false,
      isLoadedStops: false,
      zoom: 20,
      currensposition: [],
      positionLoaded: false,
>>>>>>> feature/icon
    };
    this.filterBusses = this.filterBusses.bind(this);

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
  
  filterBusses(id){
    const newStateArray = this.state.filter.slice();
    const index = newStateArray.indexOf(id);

    if (index > -1){
     newStateArray.splice(index, 1);      
    }
    else {
      newStateArray.push(id);
    }

    this.setState({
      filter: newStateArray,
    },
    this.updateFilteredBusses,);
  }

  updateFilteredBusses(){

    this.setState({
      filteredBusses: this.datahandling.getBusInformation(this.state.items, this.state.filter),
    });
  }

  componentDidMount() {
    this.getData();
    this.getHaltestellen();
    setInterval(this.timer.bind(this), 1000);
  }

  getHaltestellen(){
    fetch("https://rest.busradar.conterra.de/prod/haltestellen")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        busStops: this.datahandling.getBusStops(json.features),
      });
    });
  } 


  getData() {
    fetch("https://rest.busradar.conterra.de/prod/fahrzeuge")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
<<<<<<< HEAD
          items: json.features,
          AllLines: this.datahandling.getBusLines(json.features, this.state.filter),
          AllBusses: this.datahandling.getBusInformation(json.features, []),
          filteredBusses: this.datahandling.getBusInformation(json.features, this.state.filter),
          isLoaded: true,
=======
          isLoadedBus: true,
          itemsBus: json.features,
>>>>>>> feature/icon
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
<<<<<<< HEAD
        <Map busStops={this.state.busStops} AllLines={this.state.AllLines} filter={this.state.filter} filterBusses={this.filterBusses} AllBusses={this.state.AllBusses} items={this.state.items} isLoaded={this.state.isLoaded} filteredBusses={this.state.filteredBusses}/>
=======
        <BusMap
          itemsStop={this.state.itemsStop}
          itemsBus={this.state.itemsBus}
          isLoadedBus={this.state.isLoadedBus}
          isLoadedStops={this.state.isLoadedStops}
          zoom={this.state.zoom}
          currentPosition={this.state.currensposition}
          positionLoaded={this.state.positionLoaded}
        />
>>>>>>> feature/icon
      </div>
    );
  }
}

export default Apps;
