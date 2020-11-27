import React from "react";
import Logo1 from "../images/logo1.png";
import Nordine from "../images/nordine.jpg";
import Thomas from "../images/thomas.jpg";
import Gaetan from "../images/gaetan.jpg";
import Alexis from "../images/alexis.jpeg";
import linkedin from "../images/linkedin.png";
import githup from "../images/githup.png";
import school from "../images/school.jpg";
import styled from "styled-components";

const Color = styled.div`
	font-family: "Montserrat", sans-serif;
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
	margin: 30px;
	width: 500px;
	margin-left: auto;
	margin-right: auto;
	@media (max-width: 768px) {
		width: 350px;
	}
`;
const PictureStyled = styled.img`
	width: 200px;
	height: 300px;
	filter: grayscale(100%);
`;
const Logo = styled.img`
	width: auto;
	height: 30px;
	bottom: 300px;
	left: 150px;
	margin: 5px;
	border-radius: 5px;
	@media (max-width: 768px) {
		bottom: 40px;
		left: 20px;
	}
`;
const Team = styled.h1`
	margin-top: -100px;
	font-size: 45px;
	color: #fed45e;
`;
const School = styled.img`
	width: 90px;
	height: 100px;
	float: right;
	margin-left: 1250px;
`;

const Item = styled.div`
	color: #fed45e;
	margin: 0vh 4vw 2vh;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const Items = styled.div`
	display: flex;
	justify-content: center;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px;
`;

const Logo2 = styled.img`
	width: 13;
	height: 60px;
	margin-left: auto;
	margin-right: auto;
`;

const Name = styled.h2`
	display: flex;
	flex-direction: column;
	margin: 5vh;
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
				<Item>
					<Name>Nordine Madoui</Name>
					<PictureStyled id="nordine" src={Nordine} alt="picturenordine" />
					<LogoContainer>
						<a href="https://github.com/nordinemadoui/" target="blank">
							<Logo src={githup} />
						</a>
						<a
							href="https://www.linkedin.com/in/nordine-madoui-a063811bb/"
							target="blank"
						>
							<Logo src={linkedin} />
						</a>
					</LogoContainer>
				</Item>

				<Item>
					<Name>Thomas Druart</Name>
					<PictureStyled id="thomas" src={Thomas} alt="picturethomas" />
					<LogoContainer>
						<a href="https://github.com/thomasdruart/" target="blank">
							<Logo src={githup} />
						</a>
						<a
							href="https://www.linkedin.com/in/thomas-druart/?originalSubdomain=fr"
							target="blank"
						>
							<Logo src={linkedin} />
						</a>
					</LogoContainer>
				</Item>

				<Item>
					<Name>Gaetan Cordonnier</Name>
					<PictureStyled id="gaetan" src={Gaetan} alt="picturegaetan" />
					<LogoContainer>
						<a href="https://github.com/gaetan-cordonnier/" target="blank">
							<Logo src={githup} />
						</a>
						<a
							href="https://www.linkedin.com/in/gaetancordonnier/"
							target="blank"
						>
							<Logo src={linkedin} />
						</a>
					</LogoContainer>
				</Item>

				<Item>
					<Name>Alexis Catrix</Name>
					<PictureStyled id="gaetan" src={Alexis} alt="picturealexis" />
					<LogoContainer>
						<a href="https://github.com/AlexisCatrix/" target="blank">
							<Logo src={githup} />
						</a>
						<a href="https://www.linkedin.com/" target="blank">
							<Logo src={linkedin} />
						</a>
					</LogoContainer>
				</Item>
			</Items>
		</Color>
	);
}

export default TeamNoctali;
