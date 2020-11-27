import React from "react";
import map from "../images/footer/map.svg";
import team from "../images/footer/group.svg";
import info from "../images/footer/information-button.svg";
import bikeList from "../images/footer/bycicle.svg";
import logoNote from "../images/logoNote.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Align = styled.ul`
  background-color: #242424;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
const Image = styled.img`
  height: 50px;
  width: 50px;
`;

function Footer() {
  return (
    <Align>
      <li>
        <Link to="/stationslist">
          <Image id="logogps" src={bikeList} alt="station list" />
        </Link>
      </li>
      <li>
        <Link to="/">
          <Image id="home" src={map} alt="home" />
        </Link>
      </li>
      <li>
        <Link to="/teamnoctali">
          <Image id="teams" src={team} alt="teams" />
        </Link>
      </li>
      <li>
        <Link to="/reminder">
          <Image id="teams" src={logoNote} alt="note" />
        </Link>
      </li>
      <li>
        <Link to="/about">
          <Image id="info" src={info} alt="logoinfo" />
        </Link>
      </li>
    </Align>
    //</FooterStyled>
  );
}

export default Footer;
