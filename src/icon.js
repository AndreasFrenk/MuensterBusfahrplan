import L from "leaflet";
import busicon from "./bus-icon.svg";

const iconPerson = new L.Icon({
  iconUrl: busicon,
  iconRetinaUrl: busicon,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [-12, 12],
  className: "leaflet-div-icon",
});

export { iconPerson };
