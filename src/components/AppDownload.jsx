import React from "react";
import Logo1 from "../images/logo1.png";
import Home from "../images/Home.png";
import carteinfos from "../images/carteinfos.png";
import stations from "../images/stations.png";
import styled from "styled-components";

const PageStyled = styled.div`
  background-color: rgb(221, 214, 214);
  width: 100%;
  height: 80vh;
`;

const ImageStyled = styled.img`
  border: none;
  width: 200px;
  height: 300px;
  padding: 0px;
  margin: 5px;
`;

const AppStyled = styled.img`
  width: 100px;
  height: 100px;
  padding: 50px;
  margin: 30px;
`;

const BorderStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 1px solid;
  padding: 10px;
  margin: auto;
  background-color: white;
`;

const ButtonStyled = styled.button`
  background-color: rgb(104, 159, 56);
  border-radius: 5px;
  box-shadow: 1px;
  padding: 2px;
  margin-top: 80px;
  width: 100px;
  height: 50px;
  color: white;
`;

const ParaStyled = styled.p`
  margin-top: 300px;
`;

function AppDownload() {
  return (
    <PageStyled>
      <BorderStyled>
        <AppStyled id="logoHeader" src={Logo1} alt="logo" />

        <ButtonStyled>Télécharger</ButtonStyled>

        <ImageStyled id="HomeApp" src={Home} alt="logohome" />

        <ImageStyled id="carte" src={carteinfos} alt="logocarte" />

        <ImageStyled id="stations" src={stations} alt="logostations" />
        <ParaStyled>
          L'application offre également une recherche rapide et une localisation
          des stations les plus proches.
          <br />
          Doukilemin v'lille, l'application non officielle pour les habitués du
          VLS du service V'Lille.
        </ParaStyled>
      </BorderStyled>
    </PageStyled>
  );
}

export default AppDownload;
