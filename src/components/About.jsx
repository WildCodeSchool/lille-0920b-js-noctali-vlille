import React from "react";
import Velo1 from "../images/velo512.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100% auto;
  height: 80vh;
  background-color: #242424;
`;

const ImgStyled = styled.img`
  width: 400px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const BorderStyled = styled.div`
  box-shadow: 1px solid;
  padding: 10px;
  margin: auto;
  background-color: #242424;
`;

const TitleStyled = styled.h1`
  font-family: "Roboto", Arial, sans-serif;
  font-size: 30px;
  color: orange;
`;

const Paragraphe = styled.div`
  color: white;
`;

const Span = styled.span`
  color: orange;
  text-decoration: none;
`;

const Vlille = styled.a`
  float: right;
  text-decoration: none;
  color: orange;
`;

const About = () => {
  return (
    <DivStyled>
      <BorderStyled>
        <TitleStyled>Doukilemin V'lille</TitleStyled>

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
            Dès l'écran d'acceuil, Doukilemin V'lille affiche l'état des
            stations, évitant ainsi les menus superflus.
          </p>
          <ul>
            <li>
              <br />
              <Link to="/appdownload">
                <Span>Télécharger l'application</Span>
              </Link>
              <Vlille
                href="https://www.goodmorninglille.org/blog/vlille-lille-location-de-velos"
                target="_blank"
              >
                Guide d'utilisation V'lille
              </Vlille>
            </li>
          </ul>
        </Paragraphe>
      </BorderStyled>
    </DivStyled>
  );
};

export default About;
