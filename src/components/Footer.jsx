import React from "react";
//import logoGps from "../images/logoGps.png";
//import logoNote from "../images/logoNote.png";
import styled from "styled-components";
//import About from "./About";
import { Link } from "react-router-dom";
//import { LatLng } from "leaflet";

const AlignStyled = styled.ul`
  background-color: #242424;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
// const ImageStyled = styled.img`
//  height: 90%;
// width: auto;
//  margin: auto;
//`;

function Footer() {
  return (
    // <FooterStyled>
    // <ImageStyled src={logoGps} alt="gps" />
    //  <ImageStyled src={logoNote} alt="note" />

    <AlignStyled>
      <li>
        <Link to="/about">A propos</Link>
      </li>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/teamnoctali">Notre équipe</Link>
      </li>
    </AlignStyled>
    // </FooterStyled>
  );
}

export default Footer;
