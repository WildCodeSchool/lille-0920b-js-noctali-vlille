import React from "react";
import axios from "axios";
import { Warning } from "@styled-icons/ionicons-solid/Warning";
import { CreditCard } from "@styled-icons/bootstrap/CreditCard";
import styled from "styled-components";
import { geolocated } from "react-geolocated";

const ListStyled = styled.div`
	background-color: #f1f1f1;
	position: relative;
	padding: 11vh 10px 10vh 10px;
	z-index: 1;
	font-family: "Montserrat", sans-serif;
	font-size: 1.2rem;
`;

const NameStation = styled.span`
	font-weight: bold;
	font-size: 1.2rem;
`;

const AdressStation = styled.span`
	font-size: 0.9rem;
`;

const Status = styled.div`
	display: inline-block;
	border-radius: 50%;
	width: 10px;
	height: 10px;
	margin: 0 5px 1px 5px;

	&.Online {
		background: green;
		border: solid 1px #bbff00;
	}
	&.Offline {
		background: #ff3c00;
		border: solid 1px #ffbb00;
	}

	&.None {
		display: none;
	}
`;

const WarningIcon = styled(Warning)`
	width: 20px;
	padding: 0px 5px 7px 5px;

	&.Icon {
		color: #ff9d00;
	}

	&.None {
		display: none;
	}
`;

const CBStyled = styled(CreditCard)`
	width: 20px;
	padding: 0px 5px 6px 5px;

	&.available {
	}
	&.notAvailable {
		color: red;
		opacity: 0.33;
	}
`;

const Line = styled.hr`
	border: 1px solid #242424;
`;

const Nb = styled.p`
	font-weight: bold;
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
						<NameStation>{station.fields.nom}</NameStation>
						<Status
							className={
								station.fields.etat.includes("EN SERVICE") ? "Online" : "None"
							}
						/>
						<Status
							className={
								station.fields.etat.includes("HORS SERVICE")
									? "Offline"
									: "None"
							}
						/>
						<WarningIcon
							className={
								station.fields.etat.includes("EN MAINTENANCE") ? "Icon" : "None"
							}
						/>
						<CBStyled
							className={
								station.fields.type.includes("AVEC TPE")
									? "available"
									: "notAvailable"
							}
						/>
						<br />
						<AdressStation>{station.fields.adresse}</AdressStation>
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
