import React from "react";
import Logo1 from "../images/logo1.png";
import Home from "../images/Home.png";
import carte from "../images/carte.png";
import stations from "../images/stations.png";
import styled from "styled-components";
import UseModal from "./UseModal";
import Modal from "./Modal";

const PageStyled = styled.div`
  background-color: #242424;
  width: 100%;
  height: 80vh;
`;

const ImageStyled = styled.img`
  width: 200px;
  height: 300px;
  padding: 0px;
  margin: 5px;
  border: 1px solid;
`;

const AppStyled = styled.img`
  width: 80px;
  height: 70px;
  padding: 10px;
  margin: 5px;
  border: 1px solid;
  background-color: #242424;
`;

const BorderStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 1px solid;
  padding: 10px;
  margin: auto;
  background-color: #242424;
`;

const ButtonStyled = styled.button`
  background-color: rgb(104, 159, 56);
  border-radius: 5px;
  box-shadow: 1px;
  padding: 2px;
  margin-top: 50px;
  width: 100px;
  height: 40px;
  color: white;
  margin-right: 90px;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  border: none;
`;

const Paragraphe = styled.p`
  color: white;
  text-align: center;
  padding-top: 50px;
`;

const Star = styled.div`
  color: white;
  text-decoration: none;
  font-size: 1em;
  margin-left: -250px;
`;

const Button = styled.button`
  display: block;
  margin: auto;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 1px;
  width: 150px;
  height: 40px;
  color: gray;
  font-weight: bolder;
`;

function AppDownload() {
  const { avis, toggle } = UseModal();

  return (
    <PageStyled>
      <BorderStyled>
        <AppStyled id="logoHeader" src={Logo1} alt="logo" />
        <Star>
          <p>☆ ☆ ☆ ☆ ☆ 34 </p>
          <br />
          <p>Plans et navigation</p>
        </Star>

        <ButtonStyled>Télécharger</ButtonStyled>
      </BorderStyled>
      <Image>
        <ImageStyled id="HomeApp" src={Home} alt="logohome" />

        <ImageStyled id="carte" src={carte} alt="logocarte" />

        <ImageStyled id="stations" src={stations} alt="logostations" />
      </Image>
      <Paragraphe>
        L'application offre également une recherche rapide et une localisation
        des stations les plus proches.
        <br />
        Doukilemin v'lille, l'application non officielle pour les habitués du
        VLS du service V'Lille.
      </Paragraphe>
      <Button onClick={toggle}>Donner votre avis</Button>
      <Modal avis={avis} closed={toggle} />
    </PageStyled>
  );
}

export default AppDownload;
