import React from "react";
import axios from "axios";
import { Warning } from "@styled-icons/ionicons-solid/Warning";
import { CreditCard } from "@styled-icons/bootstrap/CreditCard";
import { CircleSlash } from "@styled-icons/octicons/CircleSlash";
import styled from "styled-components";
import { geolocated } from "react-geolocated";

const ListStyled = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #f1f1f1;
	padding: 10px;
	font-family: "Montserrat", sans-serif;
	font-size: 1.2rem;
`;

const StationStyled = styled.div`
	display: flex;
	flex-direction: column;
`;
const StationTitle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const NameStation = styled.span`
	font-weight: bold;
	font-size: 1.2rem;
	vertical-align: middle;
`;

const Status = styled.div`
	display: flex-start;
`;

const StatusPoint = styled.div`
	border-radius: 50%;
	width: 10px;
	height: 10px;
	margin: 0px 5px 1px 5px;

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
	width: 25px;
	margin: 0px 5px 1px 5px;

	&.Icon {
		color: #ff9d00;
	}

	&.None {
		display: none;
	}
`;

const InfoCB = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
`;

const CBStyled = styled(CreditCard)`
	width: 20px;

	&.available {
	}
	&.notAvailable {
		opacity: 75%;
		color: #000000;
	}
`;

const CircleSlashStyled = styled(CircleSlash)`
	&.available {
		display: none;
		opacity: 65%;
	}
	&.notAvailable {
		height: 30px;
		color: #ff0000;
		position: absolute;
		opacity: 65%;
	}
`;

const AdressStation = styled.span`
	font-size: 0.9rem;
	margin-top: 5px;
`;

const NumberbStations = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const Cycles = styled.div`
	margin-top: 10px;
`;

const Parkings = styled.div`
	margin-top: 5px;
`;

const Line = styled.hr`
	width: 100%;
	border: 1px solid #b6b6b6;
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
					<StationStyled>
						<StationTitle>
							<NameStation>{station.fields.nom}</NameStation>
							<Status>
								<StatusPoint
									className={
										station.fields.etat.includes("EN SERVICE")
											? "Online"
											: "None"
									}
								/>
								<StatusPoint
									className={
										station.fields.etat.includes("HORS SERVICE")
											? "Offline"
											: "None"
									}
								/>
								<WarningIcon
									className={
										station.fields.etat.includes("EN MAINTENANCE")
											? "Icon"
											: "None"
									}
								/>
							</Status>
							<InfoCB>
								<CBStyled
									className={
										station.fields.type.includes("AVEC TPE")
											? "available"
											: "notAvailable"
									}
								/>
								<CircleSlashStyled
									className={
										station.fields.type.includes("AVEC TPE")
											? "available"
											: "notAvailable"
									}
								/>
							</InfoCB>
						</StationTitle>
						<AdressStation>{station.fields.adresse}</AdressStation>
						<NumberbStations>
							<Cycles>
								{"Vélos disponibles : "}
								{station.fields.nbvelosdispo}
							</Cycles>
							<Parkings>
								{"Emplacements libres : "}
								{station.fields.nbplacesdispo}
							</Parkings>
						</NumberbStations>
						<Line />
					</StationStyled>
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
