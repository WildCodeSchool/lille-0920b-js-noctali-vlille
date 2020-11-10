import React from "react";

import axios from "axios";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import L from "leaflet";
import { geolocated } from "react-geolocated";

//Markers import
import icon0 from "../images/marker-empty.png";
import icon1 from "../images/marker-1-4.png";
import icon2 from "../images/marker-1-2.png";
import icon3 from "../images/marker-3-4.png";
import icon4 from "../images/marker-full.png";
import iconPb from "../images/marker-pb.png";
import iconShadow from "../images/marker-shadow.png";

/*
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: icon,
  iconRetinaUrl: icon,
  shadowUrl: iconShadow,
});
*/

class MapLille extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&q=&rows=251&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion"
      )
      .then(({ data }) => {
        this.setState({
          stations: data.records,
        });
      });
  }

  render() {
    const { stations } = this.state;

    const DEFAULT_LATITUDE = 50.6365654;
    const DEFAULT_LONGITUDE = 3.0635282;

    const longitude = this.props.coords
      ? this.props.coords.longitude
      : DEFAULT_LONGITUDE;

    const latitude = this.props.coords
      ? this.props.coords.latitude
      : DEFAULT_LATITUDE;

    function iconSelect() {
      return icon3;
    }

    /*
      function iconSelect() {
        let fillingRate = (this.props.station.fields.nbplacesdispo / (this.props.station.fields.nbplacesdispo + this.props.station.fields.nbvelosdispo))
        if (fillingRate == 0 ) {
          return icon0
        }
        else if (fillingRate < 0.33 ) {
          return icon1
        }
        else if (fillingRate < 0.66 ) {
          return icon2
        }
        else if (fillingRate < 0.100 ) {
          return icon3
        }
        else if (fillingRate == 1 ) {
          return icon4
        }
         else {
          return iconPb
        }
        
      }
      */
    const leafletIcon = L.icon({
      iconUrl: iconSelect(),
      iconRetinaUrl: iconSelect(),
      shadowUrl: iconShadow,
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      shadowAnchor: [12, 42],
      popupAnchor: [0, -85],
    });

    return (
      <div>
        <Map center={[latitude, longitude]} zoom={14} minZoom={11}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {stations.map((station) => (
            <Marker
              key={station.fields.nom}
              position={[
                station.geometry.coordinates[1],
                station.geometry.coordinates[0],
              ]}
              icon={leafletIcon}
            >
              <Popup>
                {station.fields.nom} {station.fields.etat}
                <br />
                {station.fields.adresse}
                <br />
                {"Vélos dispo "}
                {station.fields.nbvelosdispo}
                <br />
                {"Emplacements dispo "}
                {station.fields.nbplacesdispo}
              </Popup>
            </Marker>
          ))}
        </Map>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10000,
})(MapLille);
