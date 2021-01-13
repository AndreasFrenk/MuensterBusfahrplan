import React, { Component } from "react";
import Map from "./components/map";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataHandling from './components/DataHandling';
class Apps extends Component {
  constructor(props) {
    super(props);
    this.interval = 0;
    this.datahandling = new DataHandling;
    this.state = {
      items: [],
      isLoaded: false,
      currentCount: 0,
      filteredBusses: [],
      AllBusses: [],
      filter: [],
      AllLines: [],
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
          items: json.features,
          AllLines: this.datahandling.getBusLines(json.features, this.state.filter),
          AllBusses: this.datahandling.getBusInformation(json.features, []),
          filteredBusses: this.datahandling.getBusInformation(json.features, this.state.filter),
          isLoaded: true,
        });
      });
  }

  render() {
    return (
      <div>
        <Map busStops={this.state.busStops} AllLines={this.state.AllLines} filter={this.state.filter} filterBusses={this.filterBusses} AllBusses={this.state.AllBusses} items={this.state.items} isLoaded={this.state.isLoaded} filteredBusses={this.state.filteredBusses}/>
      </div>
    );
  }
}

export default Apps;
