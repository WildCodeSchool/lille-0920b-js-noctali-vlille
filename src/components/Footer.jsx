import React from "react";
import logoGps from "../images/logoGps.png";
import logoNote from "../images/logoNote.png";
import styled from "styled-components";

const FooterStyled = styled.div`
  background-color: #242424;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-around;
`;

const ImageStyled = styled.img`
  height: 90%;
  width: auto;
  margin: auto;
`;

function Footer() {
  return (
    <FooterStyled>
      <ImageStyled src={logoGps} alt="gps"/>
      <ImageStyled src={logoNote} alt="note"/>
    </FooterStyled>
  );
}

export default Footer;
