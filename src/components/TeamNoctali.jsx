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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100% auto;
  height: 100%;
  background-color: #242424;
`;

const Paragraphe = styled.p`
  width: 400px;
  text-align: center;
  margin: 10px;
  color: white;
`;

const PictureStyled = styled.img`
  width: 200px;
  height: 300px;
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
`;

const Logo = styled.img`
  width: 40px;
  height: 30px;
`;

const Githup = styled.img`
  width: 40px;
  height: 30px;
`;

const Team = styled.h1`
  margin: -15px;
  font-size: 40px;
  color: orange;
`;
const School = styled.img`
  margin-right: -1250px;
  margin-top: -70px;
  width: 90px;
  height: 100px;
`;

const Picture = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NameStyled = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  margin: 20px;
  color: orange;
`;

const Color = styled.div`
  background-color: #242424;
  width: 100% auto;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
`;

const Item1 = styled.a`
  margin-left: 140px;
  margin-right: -130px;
`;

const Item2 = styled.a`
  margin-left: 400px;
  margin-right: -390px;
`;

const Item3 = styled.a`
  margin-left: 640px;
  margin-right: -630px;
`;

const Item4 = styled.a`
  margin-left: 920px;
  margin-right: -910px;
`;

function TeamNoctali() {
  return (
    <Color>
      <Container>
        <Team>L'EQUIPE</Team>
        <School id="school" src={school} alt="school" />
        <Paragraphe>
          La réalisation de cette application web sur une durée de 6 semaines
          avec l'utilisation de l'API V'lille fut piloté par une équipe de 4
          développeurs juniors passionnés par la programmation au sein de la
          Wild Code School de Lille.
        </Paragraphe>
        <img id="Velo1" src={Logo1} alt="logovelo" />
        <Paragraphe>Les membres de l'équipe :</Paragraphe>
        <br />
      </Container>

      <NameStyled>
        <h2>Nordine Madoui</h2>
        <h2>Thomas Druart</h2>
        <h2>Gaetan Cordonnier</h2>
        <h2>Alexis Catrix</h2>
      </NameStyled>
      <Item>
        <Item1 href="https://github.com/nordinemadoui/">
          <Githup src={githup} />
        </Item1>
        <Item1
          href="https://www.linkedin.com/in/nordine-madoui-a063811bb/"
          target="_blank"
        >
          <Logo src={linkedin} />
        </Item1>
        <Item2 href="https://github.com/thomasdruart/" target="_blank">
          <Githup src={githup} />
        </Item2>
        <Item2
          href="https://www.linkedin.com/in/thomas-druart/?originalSubdomain=fr"
          target="_blank"
        >
          <Logo src={linkedin} />
        </Item2>
        <Item3 href="https://github.com/gaetan-cordonnier/" target="_blank">
          <Githup src={githup} />
        </Item3>
        <Item3
          href="https://www.linkedin.com/in/gaetancordonnier/"
          target="_blank"
        >
          <Logo src={linkedin} />
        </Item3>
        <Item4 href="https://github.com/AlexisCatrix/" target="_blank">
          <Githup src={githup} />
        </Item4>
        <Item4 href="https://www.linkedin.com/" target="_blank">
          <Logo src={linkedin} />
        </Item4>
      </Item>
      <Picture>
        <PictureStyled id="nordine" src={Nordine} alt="picturenordine" />
        <PictureStyled id="thomas" src={Thomas} alt="picturethomas" />
        <PictureStyled id="gaetan" src={Gaetan} alt="picturegaetan" />
        <PictureStyled id="gaetan" src={Alexis} alt="picturealexis" />
      </Picture>
    </Color>
  );
}

export default TeamNoctali;
