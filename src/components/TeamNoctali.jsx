import React from "react";
import Logo1 from "../images/logo1.png";
import Nordine from "../images/nordine.jpg";
import Thomas from "../images/thomas.jpeg";
import Gaetan from "../images/gaetan.jpeg";
import Alexis from "../images/alexis.jpeg";
import linkedin from "../images/linkedin.png";
import githup from "../images/githup.png";
import school from "../images/school.jpg";
import styled from "styled-components";

const Color = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-content: stretch;
  height: 100%;
  background-color: #242424;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
  }
`;

const Paragraphe = styled.p`
  color: white;
  margin: 15px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 200px;
  }
`;
const PictureStyled = styled.img`
  width: 200px;
  height: 300px;
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  @media (max-width: 768px) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 40px;
  height: 30px;
  margin-bottom: 300px;
  margin-right: -5px;

  

  

`;
const Team = styled.h1`
  margin-top: -100px;
  font-size: 45px;
  color: orange;
`;
const School = styled.img`
  width: 90px;
  height: 100px;
  float: right;
  margin-left: 1250px;
`;

const Item1 = styled.div`
  color: orange;
`;

const Item2 = styled.div`
  color: orange;
`;

const Item3 = styled.div`
  color: orange;
`;

const Item4 = styled.div`
  color: orange;
`;

const Items = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Logo2 = styled.img`
  width: 13;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
`;

function TeamNoctali() {
  return (
    <Color>
      <School src={school} />
      <Team>L'EQUIPE</Team>

      <Paragraphe>
        La réalisation de cette application web sur une durée de 6 semaines avec
        l'utilisation de l'API V'lille fut piloté par une équipe de 4
        développeurs juniors passionnés par la programmation au sein de la Wild
        Code School de Lille.
      </Paragraphe>
      <Logo2 id="Velo1" src={Logo1} alt="logovelo" />
      <Paragraphe>Les membres de l'équipe :</Paragraphe>
      <br />

      <Items>
        <Item1>
          <h2>Nordine Madoui</h2>
          <a href="https://github.com/nordinemadoui/" target="_blank">
            <Logo src={githup} />
          </a>
          <a
            href="https://www.linkedin.com/in/nordine-madoui-a063811bb/"
            target="_blank"
          >
            <Logo src={linkedin} />
          </a>
          <PictureStyled id="nordine" src={Nordine} alt="picturenordine" />
        </Item1>

        <Item2>
          <h2>Thomas Druart</h2>
          <a href="https://github.com/thomasdruart/" target="_blank">
            <Logo src={githup} />
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-druart/?originalSubdomain=fr"
            target="_blank"
          >
            <Logo src={linkedin} />
          </a>
          <PictureStyled id="thomas" src={Thomas} alt="picturethomas" />
        </Item2>
        <Item3>
          <h2>Gaetan Cordonnier</h2>
          <a href="https://github.com/gaetan-cordonnier/" target="_blank">
            <Logo src={githup} />
          </a>
          <a
            href="https://www.linkedin.com/in/gaetancordonnier/"
            target="_blank"
          >
            <Logo src={linkedin} />
          </a>
          <PictureStyled id="gaetan" src={Gaetan} alt="picturegaetan" />
        </Item3>

        <Item4>
          <h2>Alexis Catrix</h2>
          <a href="https://github.com/AlexisCatrix/" target="_blank">
            <Logo src={githup} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <Logo src={linkedin} />
          </a>
          <PictureStyled id="gaetan" src={Alexis} alt="picturealexis" />
        </Item4>
      </Items>
    </Color>
  );
}

export default TeamNoctali;
