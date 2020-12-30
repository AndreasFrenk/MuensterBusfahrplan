import L from "leaflet";
import AwesomeMarkers from "leaflet.awesome-markers";
import busicon from "./bus-icon.svg";

var i = 1;
const iconPerson = new L.Icon({
  iconUrl: busicon,
  iconRetinaUrl: busicon,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [-12, 12],
  className: "leaflet-div-icon",
  html: i + 1,
  number: i + 1,
});

var testIcon = new L.AwesomeMarkers.icon({
  markerColor: "blue",
  number: 1,
  icon: "home",
  html: 1,
});

export { iconPerson, testIcon };
