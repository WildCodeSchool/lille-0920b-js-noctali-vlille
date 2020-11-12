import React from "react";
import home from "../images/home.png";
import equipe from "../images/equipe.jpg";
import presentation from "../images/presentation.jpg";
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
  height: 40px;
  width: 60px;
`;

function Footer() {
  return (
    
    <AlignStyled>
      <li>
        <Link to="/about">
          <ImageStyled
            id="presentation"
            src={presentation}
            alt="presentation"
          />
        </Link>
      </li>
      <li>
        <Link to="/">
          <ImageStyled id="home" src={home} alt="home" />
        </Link>
      </li>
      <li>
        <Link to="/teamnoctali">
          <ImageStyled id="equipe" src={equipe} alt="equipe" />
        </Link>
      </li>
    </AlignStyled>
    //</FooterStyled>
  );
}

export default Footer;
