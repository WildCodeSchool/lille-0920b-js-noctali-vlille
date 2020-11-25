import React from "react";
import Logo1 from "../images/logo1.png";
import styled from "styled-components";
import UseModal from "./UseModal";
import Modal from "./Modal";
import Home from "../images/Home.png";
import carte from "../images/carte.png";
import stations from "../images/stations.png";

const PageStyled = styled.div`
  background-color: #242424;
  width: 100%;
  height: 80vh;
  margin: auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
  }
`;
const Image = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  border: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ImageStyled = styled.img`
  width: 200px;
  height: 300px;
  padding: 0px;
  margin: 5px;
  border: 1px solid;
  @media (max-width: 768px) {
    display: none;
  }
`;

const AppStyled = styled.img`
  width: 80px;
  height: 70px;
  padding: 10px;
  margin: 5px;
  border: 1px solid;
  background-color: #242424;
  @media (max-width: 768px) {
    position: relative;
    left: 90px;
    width: 200px;
    height: 100px;
  }
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
  @media (max-width: 768px) {
    position: relative;
    left: 30px;
    top: 80px;
  }
`;

const Paragraphe = styled.p`
  color: white;
  text-align: center;
  padding-top: 50px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Star = styled.div`
  color: white;
  text-decoration: none;
  font-size: 1em;
  margin-left: -250px;
  @media (max-width: 768px) {
    position: relative;
    right: 90px;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
`;

function AppDownload() {
  const { avis, toggle } = UseModal();

  return (
    <PageStyled>
      <BorderStyled>
        <AppStyled id="logoHeader" src={Logo1} alt="logo" />
        <Star>
          <p> &#11088; &#11088; &#11088; &#11088; &#11088; 33 </p>
          <br />
          <p>Plans et navigation</p>
        </Star>

        <ButtonStyled>Télécharger</ButtonStyled>
      </BorderStyled>
      <Image>
        <ImageStyled src={Home} alt="logohome" />
        <ImageStyled src={carte} alt="logocarte" />
        <ImageStyled src={stations} alt="logostations" />
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
