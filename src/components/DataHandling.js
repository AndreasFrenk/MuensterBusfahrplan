import { v4 as uuidv4 } from 'uuid';

export default class DataHandling {
  constructor() {
  }
  

  getBusStops (data) {
    const haltestellen = [];
    let haltestelle;
    data?.map((item) => {

      haltestelle = {
        nr: item.properties.nr,
        lbez: item.properties.lbez,
      }
      haltestellen.push(haltestelle);
    })
    return haltestellen;
  }
  
  getBusLines(data, filter, haltestellen) {
    const linesArray = [];
    const lines = [];
    let bus;
    data?.map((item) => {
      if (!lines.includes(item.properties.linienid)){
        if(!filter.includes(item.properties.linienid)){
          bus = {
            linienid: item.properties.linienid,
            id: uuidv4(),
          }  
        } else {
          bus = {
            linienid: item.properties.linienid,
            id: uuidv4(),
            checked: true,
          }  
        }
        linesArray.push(bus);
        lines.push(item.properties.linienid);
      }
    });
    linesArray.sort((a, b) => {
      return a.linienid - b.linienid
    });

    return linesArray;
  }

  getBusInformation(data, filter) {
    const busArray = [];
    let bus;
    if (filter.length > 0) {
      data?.map((item) => {
        filter.forEach(filterItem => {
          if (filterItem === item.properties.linienid) {
            bus = item.properties;
            bus['longitude'] = item.geometry.coordinates[0];
            bus['latitude'] = item.geometry.coordinates[1];
            bus['id'] = uuidv4();
            busArray.push(bus);
          }
        })
      });
      busArray.sort((a, b) => {
        return a.linienid - b.linienid
      });



      return busArray;
    }
    data?.map((item) => {
      bus = item.properties;
      bus['longitude'] = item.geometry.coordinates[0];
      bus['latitude'] = item.geometry.coordinates[1];
      bus['id'] = uuidv4();
      busArray.push(bus);
    });
    busArray.sort((a, b) => {
      return a.linienid - b.linienid
    });

    return busArray;
  }

  //   filterBusses(data, fahrzeugid){
  //     const busArray = [];
  //     let bus;
  //     data?.map((item) => {
  //         if (item.properties.fahrzeugid === fahrzeugid){
  //         bus = item.properties;
  //         bus['longitude'] = item.geometry.coordinates[0];
  //         bus['latitude'] = item.geometry.coordinates[1];
  //         busArray.push(bus);          
  //     }
  //     });
  //     console.log(busArray);
  //     return busArray;
  // }
}

