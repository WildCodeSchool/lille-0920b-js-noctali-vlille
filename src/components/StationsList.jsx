import React from "react";

import axios from "axios";
import styled from "styled-components";
import cbicon from "../images/cbicon.png";
import { geolocated } from "react-geolocated";

const ListStyled = styled.div`
	background-color: #fff3bb;
	position: relative;
	padding: 11vh 10px 10vh 10px;
	z-index: 1;
	font-family: "Montserrat", sans-serif;
`;


const Status = styled.div`
	display: inline-block;
	border-radius: 50%;
	width: 10px;
	height: 10px;
	margin: 0 4px 0px 6px;
	&.Online {
		background: #78e000;
		border: solid 1px hsl(74.11764705882354, 100%, 50%);
	}
	&.Offline {
		background: #ff3c00;
		border: solid 1px #ffbb00;
	}
`;

const CBStyled = styled.img`
	width: 1.4em;
	margin: 0 6px 0px 4px;
`;

const Line = styled.hr`
	border: 1px solid #fff;
`;

class StationsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stations: [],
		};
	}

	componentDidMount() {
		axios
			.get(
				"https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&q=&rows=251&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion"
			)
			.then(({ data }) => {
				this.setState({
					stations: data.records,
				});
			});
	}

	render() {
		const { stations } = this.state;

		return (
			<ListStyled>
				{stations.map((station) => (
					<div>
						{station.fields.nom}
						<Status
							className={
								station.fields.etat.includes("EN SERVICE")
									? "Online"
									: "Offline"
							}
						/>
						{station.fields.type.includes("AVEC TPE") ? (
							<CBStyled src={cbicon} alt={station.fields.type} />
						) : (
							""
						)}
						<br />
						{station.fields.adresse}
						<br />
						<br />
						{"Vélos disponibles : "}
						{station.fields.nbvelosdispo}
						<br />
						{"Emplacements libres : "}
						{station.fields.nbplacesdispo}
						<Line />
					</div>
				))}
			</ListStyled>
		);
	}
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false,
	},
	userDecisionTimeout: 10000,
})(StationsList);