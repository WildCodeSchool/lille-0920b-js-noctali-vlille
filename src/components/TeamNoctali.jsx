import React from "react";
import Logo1 from "../images/logo1.png";
import Nordine from "../images/nordine.jpg";
import Thomas from "../images/thomas.jpeg";
import Gaetan from "../images/gaetan.jpeg";
import Alexis from "../images/alexis.jpeg";
import linkedin from "../images/linkedin.png";
import githup from "../images/githup.png";
import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(221, 214, 214);
  //margin:100%;
  width: 100% auto;
  //height: 100%;
`;

const PictureStyled = styled.img`
  width: 500px;
  height: 400px;
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
`;

const NameStyled = styled.h2`
  font-weight: bold;
  margin: 10px;
`;

const LinkStyled = styled.a`
  font-style: italic;
`;

const ParaStyled = styled.p`
  width: 500px;
  text-align: center;
`;

const LinkedinStyled = styled.img`
  width: 30px;
  height: 30px;
`;

function TeamNoctali() {
  return (
    <ContainerStyled>
      <h1>EQUIPE</h1>

      <ParaStyled>
        La réalisation de cette application web sur une durée de 6 semaines avec
        l'utilisation de l'API V'lille fut piloté par une équipe de 4
        développeurs juniors passioné par la programmation.
      </ParaStyled>
      <img id="Velo1" src={Logo1} alt="logovelo" />
      <ParaStyled>Les membres de l'équipe.</ParaStyled>
      <br />

      <NameStyled>Nordine Madoui</NameStyled>

      <PictureStyled id="nordine" src={Nordine} alt="picturenordine" />
      <ParaStyled>
        Etant féru des nouvelles technologies Nordine a commencé le
        développement web en s'interressant de plus près à la façon dont on
        pouvait réaliser des sites web.
      </ParaStyled>

      <LinkStyled href="https://github.com/nordinemadoui/"><LinkedinStyled src={githup} />
      </LinkStyled>

      <NameStyled>Thomas Druart</NameStyled>

      <PictureStyled id="thomas" src={Thomas} alt="picturethomas" />
      <ParaStyled>
        Pour Thomas le développement web a été un tournant dans sa vie...{" "}
      </ParaStyled>

      <LinkStyled href="https://github.com/thomasdruart/"><LinkedinStyled src={githup} />
      </LinkStyled>
      <LinkStyled href="https://www.linkedin.com/in/thomas-druart/?originalSubdomain=fr">
        <LinkedinStyled src={linkedin} />
      </LinkStyled>

      <NameStyled>Gaetan Cordonnier</NameStyled>

      <PictureStyled id="gaetan" src={Gaetan} alt="picturegaetan" />
      <ParaStyled>
        Pour Gaetan le développement web a été un tournant dans sa vie...{" "}
      </ParaStyled>

      <LinkStyled href="https://github.com/gaetan-cordonnier/"><LinkedinStyled src={githup} />
    
      </LinkStyled>
      <LinkStyled href="https://www.linkedin.com/in/gaetancordonnier/">
        <LinkedinStyled src={linkedin} />
      </LinkStyled>

      <NameStyled>Alexis Catrix</NameStyled>

      <PictureStyled id="gaetan" src={Alexis} alt="picturealexis" />
      <ParaStyled>
        Pour Alexis le développement web a été un tournant dans sa vie...{" "}
      </ParaStyled>

      <LinkStyled href="https://github.com/AlexisCatrix/"><LinkedinStyled src={githup} />
      </LinkStyled>
    </ContainerStyled>
  );
}

export default TeamNoctali;
