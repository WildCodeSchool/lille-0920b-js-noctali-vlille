import React from "react";
import axios from "axios";
import { geolocated } from "react-geolocated";
import L from "leaflet";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import {
  MapStyled,
  PopupStyled,
  IsWorking,
  NameStation,
  InfoBicycle,
  InfoNbrBike,
  IconBicycle,
  InfoCB,
  CBStyled,
  CircleSlashStyled,
} from "../componentsStyled/MapLilleStyled";

//Markers import
import icon0 from "../images/marker-empty.png";
import icon1 from "../images/marker-1-4.png";
import icon2 from "../images/marker-1-2.png";
import icon3 from "../images/marker-3-4.png";
import icon4 from "../images/marker-full.png";
import iconPb from "../images/marker-pb.png";
import iconShadow from "../images/marker-shadow.png";

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
        const stations = data.records
          .map((station) => {
            const lat = station.geometry.coordinates[1];
            const lng = station.geometry.coordinates[0];

            const longitude = this.props.coords
              ? this.props.coords.longitude
              : 3.06;

            const latitude = this.props.coords
              ? this.props.coords.latitude
              : 50.63;
            station.distance = Math.hypot(latitude - lat, longitude - lng);
            return station;
          })
          .sort((a, b) => {
            return a.distance - b.distance;
          });
        this.setState({
          stations,
        });
      });
  }

  render() {
    const { stations } = this.state;

    const DEFAULT_LATITUDE = 50.63;
    const DEFAULT_LONGITUDE = 3.06;

    const longitude = this.props.coords
      ? this.props.coords.longitude
      : DEFAULT_LONGITUDE;

    const latitude = this.props.coords
      ? this.props.coords.latitude
      : DEFAULT_LATITUDE;

    function iconSelect(index) {
      let fillingRate =
        stations[index].fields.nbvelosdispo /
        (stations[index].fields.nbplacesdispo +
          stations[index].fields.nbvelosdispo);

      if (stations[index].fields.etat.includes("HORS SERVICE")) {
        return iconPb;
      } else if (
        stations[index].fields.nbvelosdispo === 0 &&
        stations[index].fields.nbplacesdispo === 0
      ) {
        return iconPb;
      } else if (fillingRate === 0) {
        return icon0;
      } else if (fillingRate < 0.33) {
        return icon1;
      } else if (fillingRate < 0.66) {
        return icon2;
      } else if (fillingRate < 1) {
        return icon3;
      } else {
        return icon4;
      }
    }

    return (
      <div>
        <MapStyled>
          <Map center={[latitude, longitude]} zoom={14} minZoom={11}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {stations.map((station, index) => (
              <Marker
                key={index}
                position={[
                  station.geometry.coordinates[1],
                  station.geometry.coordinates[0],
                ]}
                icon={L.icon({
                  iconUrl: iconSelect(index),
                  iconRetinaUrl: iconSelect(index),
                  shadowUrl: iconShadow,
                  iconSize: [30, 42],
                  iconAnchor: [15, 42],
                  shadowAnchor: [12, 42],
                  popupAnchor: [0, -40],
                })}
              >
                <Popup>
                  <PopupStyled>
                    <IsWorking
                      className={
                        station.fields.etat.includes("EN SERVICE")
                          ? "work"
                          : "dontWork"
                      }
                    >
                      {station.fields.etat}
                    </IsWorking>
                    <div>
                      <NameStation>{station.fields.nom}</NameStation>
                      <br />
                      {station.fields.adresse}
                      <br />
                      <DistanceAndCb>
                        <InfoCB>
                          <CBStyled
                            className={
                              station.fields.type.includes("AVEC TPE")
                                ? "available"
                                : "notAvailable"
                            }
                          />
                          <CircleSlashStyled
                            className={
                              station.fields.type.includes("AVEC TPE")
                                ? "available"
                                : "notAvailable"
                            }
                          />
                        </InfoCB>
                        <p>{Math.trunc(station.distance * 100000)}m</p>
                      </DistanceAndCb>
                    </div>
                    <InfoBicycle>
                      <IconBicycle
                        className={
                          station.fields.etat.includes("EN SERVICE")
                            ? "available"
                            : "notAvailable"
                        }
                      />
                      <InfoNbrBike>{station.fields.nbvelosdispo}</InfoNbrBike>
                      <br />
                      <IconBicycle className="notAvailable" />
                      <InfoNbrBike>{station.fields.nbplacesdispo}</InfoNbrBike>
                    </InfoBicycle>
                  </PopupStyled>
                </Popup>
              </Marker>
            ))}
          </Map>
        </MapStyled>
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
