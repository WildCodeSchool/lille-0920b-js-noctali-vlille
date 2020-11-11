import React from "react";
import Velo1 from "../images/web_hi_res_512.png";
import styled from "styled-components";

const DivStyled = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width : 100% auto;
      height : 80vh;
      background-color: rgb(156, 148, 148);
    
`;

const ImgStyled = styled.img`
        width : 400px;
        height : auto;
        display: block; 
        margin-left: auto; 
        margin-right: auto; `
        
const BorderStyled = styled.div`
        box-shadow: 1px solid;
        padding: 40px;
        margin: auto;
        background-color: white`
        
const TitleStyled = styled.h1`
       font-family: "Roboto", Arial, sans-serif;
       font-size: 30px;`

const About = () => {
  return (
    <DivStyled>
      <BorderStyled>
      <TitleStyled>Doukilemin V'lille</TitleStyled>
      <ImgStyled id="Velo" src={Velo1} alt="logovelo" />
      <p>Doukilemin V'lille est dédié aux utilisateurs du V'lille et de son service
      VLS (Vélos en Libre Service).</p>
      <p>Au quotidien, l'application vous permet de
      gérer facilement:
      <ul><br/>
      <li> - vos stations favorites afin de contrôler le nombre de
      vélos ou emplacements disponibles.</li><br/>
      <li> - trouver une station proche de votre
      position grace à la localisation.</li>
      </ul>
      </p>
      <p><br/>
      Dès l'écran d'acceuil, Doukilemin
      V'lille affiche l'état des stations, évitant ainsi les menus superflus.
      </p>
      <p>
      Pour toute remarque ou suggestion:
      
     <a href="nordinemadoui@sfr.fr"> email</a>
    
     </p>
    
      </BorderStyled>
    </DivStyled>
  );
};

export default About;
