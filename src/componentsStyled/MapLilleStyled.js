import styled from "styled-components";
import { Bicycle } from "@styled-icons/fa-solid/Bicycle";
import { CreditCard } from "@styled-icons/bootstrap/CreditCard";
import { CircleSlash } from "@styled-icons/octicons/CircleSlash";

export const MapStyled = styled.div`
  .leaflet-container {
    width: 100%;
    height: 80vh;
    opacity: 99%;
  }
`;

export const PopupStyled = styled.div`
  font-family: "Montserrat", sans-serif;
  width: max-content;
  height: max-content;
  @media screen and (max-width: 375px) and (max-height: 812px) {
    width: 35vw;
  }
`;

export const IsWorking = styled.li`
  padding-bottom: 0.75vh;
  font-weight: 600;
  &.work {
    color: green;
  }
  &.dontWork {
    color: #ff3c00;
  }
`;

export const NameStation = styled.span`
  font-weight: bold;
`;

export const InfoBicycle = styled.div`
  display: flex;
  margin: 1vw 0vw;
  @media screen and (max-width: 375px) and (max-height: 812px) {
    display: inline;
  }
`;

export const InfoNbrBike = styled.span`
  margin: 1vw;
  font-size: 1.5em;
  @media screen and (max-width: 375px) and (max-height: 812px) {
    margin: 3vw;
  }
`;

export const IconBicycle = styled(Bicycle)`
  width: 40px;
  padding: 0.5vh 0vw;
  &.available {
    color: #00b600;
  }

  &.notAvailable {
    color: #adadad;
  }
`;

export const InfoCB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  margin-top: 1vh;
`;

export const CBStyled = styled(CreditCard)`
  width: 20px;
  &.available {
  }
  &.notAvailable {
    color: #000000;
  }
`;

export const CircleSlashStyled = styled(CircleSlash)`
  &.available {
    display: none;
    opacity: 65%;
  }
  &.notAvailable {
    width: 30px;
    color: #ff0000;
    position: absolute;
    opacity: 65%;
  }
`;
