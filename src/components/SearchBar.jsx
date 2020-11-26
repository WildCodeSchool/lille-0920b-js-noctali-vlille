import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  InputStyled,
  SumbitSearch,
  SearchContainer,
  SelectContainer,
  SelectStation,
  CityStations,
  NameStations,
  LinkStyled,
} from "../componentsStyled/SearchBarStyled";
import "leaflet";

export default function SearchBar(props) {
  const [display, setDisplay] = useState(false);
  const [commune, setCommune] = useState([]);

  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const findSearch = (stationsCity) => {
    axios
      .get(
        `https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&q=&rows=25&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion`
      )
      .then(({ data }) => {
        let { records } = data;

        records = records.filter((record) => {
          return record.fields.commune.includes(stationsCity.toUpperCase());
          // la methode toUpperCase permet de récupérer la valeur de "commune"; qui est une chaine de caractère
          // en majuscule. Ainsi la recherche fonctionne en minuscule et en majuscule dans l'input.
        });
        setCommune(records);
        if (stationsCity === "") {
          return setCommune([]);
        }
        setDisplay(true);
      });
  };

  const handleClickOutside = (e) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(e.target)) {
      return setDisplay(false);
    }
  };

  const renderStationOnMap = () => {
    setDisplay(false);
  };
  // La fonction renderStationOnMap a pour but de retrouver une station via une methode "flyTo'" sur la map,
  // lorsque l'élément est cliqué.

  const { className, onClick } = props;
  return (
    <div ref={wrapperRef}>
      <SearchContainer className={className}>
        <InputStyled
          className={className}
          onClick={(() => handleClickOutside, onClick)}
          type="text"
          placeholder="Chercher ma commune..."
          onChange={(e) => findSearch(e.target.value)}
        />
        <SumbitSearch type="submit">Chercher</SumbitSearch>
      </SearchContainer>
      {display && (
        <SelectContainer>
          {commune.map((station) => (
            <LinkStyled to="/">
              <SelectStation onClick={() => renderStationOnMap(station)}>
                <CityStations>{station.fields.commune} - </CityStations>
                <NameStations>{station.fields.nom}</NameStations>
              </SelectStation>
            </LinkStyled>
          ))}
        </SelectContainer>
      )}
    </div>
  );
}
