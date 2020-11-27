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

const LinkStyled = styled.li`
  @media screen and (min-width: 481px) {
    .unsetListDesktop {
      display: none;
    }
    .centering {
      margin-left: 10vw;
    }
  }
  @media screen and (max-width: 480px) {
    .unsetListMobile {
      display: none;
    }
  }
`;

function Footer() {
  return (
    <Align>
      <LinkStyled>
        <Link to="/stationslist">
          <Image
            className="centering"
            id="logogps"
            src={bikeList}
            alt="station list"
          />
        </Link>
      </LinkStyled>
      <LinkStyled>
        <Link to="/teamnoctali">
          <Image
            className="unsetListMobile"
            id="teams"
            src={team}
            alt="teams"
          />
        </Link>
      </LinkStyled>
      <LinkStyled>
        <Link to="/">
          <Image id="home" src={map} alt="home" />
        </Link>
      </LinkStyled>
      <LinkStyled>
        <Link to="/about">
          <Image
            className="unsetListMobile"
            id="info"
            src={info}
            alt="logoinfo"
          />
        </Link>
      </LinkStyled>
      <LinkStyled>
        <Link to="/reminder">
          <Image
            className="unsetListDesktop"
            id="teams"
            src={logoNote}
            alt="note"
          />
        </Link>
      </LinkStyled>
    </Align>
    //</FooterStyled>
  );
}

export default Footer;
