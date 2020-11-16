import React from "react";
import homefondnoir from "../images/homefondnoir.jpg";
import team from "../images/team.jpg";
import info from "../images/info.png";
import logoGps from "../images/logoGps.png";
import styled from "styled-components";
import { Link } from "react-router-dom";



const AlignStyled = styled.ul`
  background-color: #242424;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
const ImageStyled = styled.img`
  height: 50px;
  width: 50px;
`;

function Footer() {
  return (
    
    <AlignStyled>
      <li>
        <Link to="/about">
          <ImageStyled
            id="info"
            src={info}
            alt="logoinfo"
          />
        </Link>
      </li>
      <li>
        <Link to="/">
          <ImageStyled id="home" src={homefondnoir} alt="home" />
        </Link>
      </li>
      <li>
        <Link to="/teamnoctali">
          <ImageStyled id="teams" src={team} alt="teams" />
        </Link>
      </li>
      <li>
        <Link to="/stationslist">
          <ImageStyled id="logogps" src={logoGps} alt="logoGps"/>
        </Link>
      </li>
    </AlignStyled>
    //</FooterStyled>
  );
}

export default Footer;
