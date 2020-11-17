import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const InputStyled = styled.input`
  width: 30vw;
  margin: 0vh 2vw;
`;

const SumbitSearch = styled.button`
  width: 8vw;
  height: 4vh;
`;

const SelectContainer = styled.ul`
  position: absolute;
  z-index: 1;
`;

const SelectStation = styled.li`
  display: flex;
  align-items: center;
  width: 30vw;
  height: 5vh;
  border: 1px solid #e26262;
  background-color: #461d1d;
  list-style: none;
  margin-left: 2vw;
  padding-left: 1vw;
  /* height: 10vh; */
  color: #fed96a;
`;

const CityStations = styled.li`
  font-style: italic;
`;

const NameStations = styled.li`
  font-weight: bold;
  margin-left: 0.5vw;
`;

export default function SearchBar() {
  const [commune, setCommune] = useState([]);

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
        console.log(records);
      })
      .catch((err) => {
        console.log(err);
        console.log("It is a failure");
      });
  };

  return (
    <div>
      <InputStyled type="text" onChange={(e) => findSearch(e.target.value)} />
      <SumbitSearch type="submit">Chercher</SumbitSearch>
      <SelectContainer>
        {commune.map((station) => (
          <SelectStation>
            <CityStations>{station.fields.commune} - </CityStations>
            <NameStations>{station.fields.nom}</NameStations>
          </SelectStation>
        ))}
      </SelectContainer>
    </div>
  );
}
