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
	width: 100% auto;
	height: 100%;
`;

const PictureStyled = styled.img`
	width: 300px;
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

const ParaStyled = styled.p`
	width: 400px;
	text-align: center;
	margin: 20px;
`;

const LinkStyled = styled.a`
	width: 10px;
`;

const LogoStyled = styled.img`
	width: 40px;
	height: 30px;
	margin: 5px;
	align-items: center;
`;

const TeamStyled = styled.h1`
	margin: 20px;
	font-size: 40px;
`;

function TeamNoctali() {
	return (
		<ContainerStyled>
			<TeamStyled>L'EQUIPE</TeamStyled>

			<ParaStyled>
				La réalisation de cette application web sur une durée de 6 semaines avec
				l'utilisation de l'API V'lille fut piloté par une équipe de 4
				développeurs juniors passionnés par la programmation au sein de la Wild
				Code School de Lille.
			</ParaStyled>
			<img id="Velo1" src={Logo1} alt="logovelo" />
			<ParaStyled>Les membres de l'équipe :</ParaStyled>
			<br />
			<NameStyled>Nordine Madoui</NameStyled>
			<PictureStyled id="nordine" src={Nordine} alt="picturenordine" />

			<LinkStyled href="https://github.com/nordinemadoui/">
				<LogoStyled src={githup} />
			</LinkStyled>

			<NameStyled>Thomas Druart</NameStyled>
			<PictureStyled id="thomas" src={Thomas} alt="picturethomas" />
			<LinkStyled href="https://github.com/thomasdruart/">
				<LogoStyled src={githup} />
			</LinkStyled>
			<LinkStyled href="https://www.linkedin.com/in/thomas-druart/?originalSubdomain=fr">
				<LogoStyled src={linkedin} />
			</LinkStyled>

			<NameStyled>Gaetan Cordonnier</NameStyled>
			<PictureStyled id="gaetan" src={Gaetan} alt="picturegaetan" />
			<LinkStyled href="https://github.com/gaetan-cordonnier/">
				<LogoStyled src={githup} />
			</LinkStyled>
			<LinkStyled href="https://www.linkedin.com/in/gaetancordonnier/">
				<LogoStyled src={linkedin} />
			</LinkStyled>

			<NameStyled>Alexis Catrix</NameStyled>

			<PictureStyled id="gaetan" src={Alexis} alt="picturealexis" />
			<LinkStyled href="https://github.com/AlexisCatrix/">
				<LogoStyled src={githup} />
			</LinkStyled>
		</ContainerStyled>
	);
}

export default TeamNoctali;
