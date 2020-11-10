import React from "react";
import Velo1 from "../images/web_hi_res_512.png";
import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgStyled = styled.img`
        width : auto;
        height : auto;`

const About = () => {
  return (
    <DivStyled>
      <h1>Doukilemin V'lille</h1>
      <ImgStyled id="Velo" src={Velo1} alt="logovelo" />
      <p>Doukilemin V'lille est dédié aux utilisateurs du V'lille et de son service
      VLS (Vélos en Libre Service).</p>
      <p>Au quotidien, l'application vous permet de
      gérer facilement: 
      <ul>
      <li> - vos stations favorites afin de contrôler le nombre de
      vélos ou emplacements disponibles.</li>
      <li> - trouver une station proche de votre
      position grace à la localisation.</li>
      </ul>
      </p>
      <p>
      Dès l'écran d'acceuil, Doukilemin
      V'lille affiche l'état des stations, évitant ainsi les menus superflus.
      </p>
      <p>
      Pour toute remarque ou suggestion: nordinemadoui@sfr.fr</p>

    </DivStyled>
  );
};

export default About;
