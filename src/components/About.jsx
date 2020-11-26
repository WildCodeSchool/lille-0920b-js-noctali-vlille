import React from "react";
import Velo1 from "../images/velo512.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 80vh;
  background-color: #242424;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ImgStyled = styled.img`
  width: 300px;
  height: auto;
  display: block;
  margin: 2vh;
  @media (max-width: 768px) {
    width: auto;
    height: 30vh;
  }
`;

const Title = styled.h1`
  font-family: "Roboto", Arial, sans-serif;
  font-size: 30px;
  color: orange;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 20px;
  }
`;

const Paragraphe = styled.div`
  color: white;
  margin: 2vh;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const Span = styled.span`
  color: orange;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Vlille = styled.a`
  float: right;
  text-decoration: none;
  color: orange;
  @media (max-width: 768px) {
    display: none;
  }
`;

const About = () => {
  return (
    <DivStyled>
      <Title>Doukilemin V'lille</Title>

      <ImgStyled id="Velo1" src={Velo1} alt="logovelo" />
      <Paragraphe>
        <p>
          Doukilemin V'lille est dédié aux utilisateurs du V'lille et de son
          service VLS (Vélos en Libre Service).
        </p>
        <p>
          Au quotidien, l'application vous permet de gérer facilement:
          <ul>
            <br />
            <li>
              {" "}
              - vos stations favorites afin de contrôler le nombre de vélos ou
              emplacements disponibles.
            </li>
            <br />
            <li>
              {" "}
              - trouver une station proche de votre position grace à la
              localisation.
            </li>
          </ul>
        </p>
        <p>
          <br />
          Dès l'écran d'accueil, Doukilemin V'lille affiche l'état des stations,
          évitant ainsi les menus superflus.
        </p>
        <ul>
          <li>
            <br />
            <LinkStyled to="/appdownload">
              <Span>Télécharger l'application</Span>
            </LinkStyled>
            <Vlille
              href="https://www.goodmorninglille.org/blog/vlille-lille-location-de-velos"
              target="_blank"
            >
              Guide d'utilisation V'lille
            </Vlille>
          </li>
        </ul>
      </Paragraphe>
    </DivStyled>
  );
};

export default About;
