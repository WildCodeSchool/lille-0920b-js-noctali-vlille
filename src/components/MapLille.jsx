import React from "react";
import axios from "axios";
import { Bicycle } from "@styled-icons/fa-solid/Bicycle";
import { CreditCard } from "@styled-icons/bootstrap/CreditCard";
import { geolocated } from "react-geolocated";
import icon from "../images/marker-3-4.png";
import iconShadow from "../images/marker-shadow.png";
import L from "leaflet";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import styled from "styled-components";

const PopupStyled = styled.div`
  width: max-content;
  height: max-content;
  @media screen and (max-width: 375px) and (max-height: 812px){
    width: 35vw;
  }
`;

const IsWorking = styled.li`
  padding-bottom: 0.75vh;
  font-weight: 600;
  &.work {
    color: green;
  }
  &.dontWork {
    color: red;
  }
`;

const NameStation = styled.span`
  font-weight: bold;
`;

const InfoBicycle = styled.div`
  display: flex;
  margin: 1vw 0vw;
  @media screen and (max-width: 375px) and (max-height: 812px){
    display: inline;
  }
`;

const InfoNbrBike = styled.span`
  margin: 1vw;
  font-size: 1.5em;
  @media screen and (max-width: 375px) and (max-height: 812px){
    margin: 3vw;
  }
`;

const IconBicycle = styled(Bicycle)`
  width: 40px;
  padding: 0.5vh 0vw;
  &.available {
    color: #00b600;
  }

  &.notAvailable {
    color: #adadad;
  }
`;

const CBStyled = styled(CreditCard)`
  &.available {
    width: 20px;
  }
  &.notAvailable {
    display: none;
  }
`;

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

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
                    <CBStyled
                      className={
                        station.fields.type.includes("AVEC TPE")
                          ? "available"
                          : "notAvailable"
                      }
                    />
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
