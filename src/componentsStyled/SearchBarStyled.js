import styled from "styled-components";
import { Link } from "react-router-dom";
import { Search } from "@styled-icons/boxicons-regular/Search";

export const InputStyled = styled.input`
  width: 30vw;
  margin: 0vh 2vw;
  @media screen and (max-width: 480px) and (min-height: 812px) {
    width: 40vw;
    &.resizeInput {
      display: flex;
      justify-content: center;
      width: 80vw;
      transition: transform width 250ms ease-in-out;
    }
  }
`;

export const SearchContainer = styled.div`
  height: 4vh;
  width: 100%;
  @media screen and (max-width: 480px) and (min-height: 812px) {
    &.resizeInput {
      display: flex;
      justify-content: center;
    }
  }
`;

export const SumbitSearch = styled(Search)`
  color: white;
  height: inherit;
  /* height: 2vh; */
`;

export const SelectContainer = styled.ul`
  width: 80vw;
  position: absolute;
  z-index: 1;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

export const SelectStation = styled.li`
  display: flex;
  align-items: center;
  width: 30vw;
  height: 5vh;
  border: 1px solid #c1c1c1;
  background: linear-gradient(160deg, #242424 55%, #6c6c6c);
  list-style: none;
  text-decoration: none;
  margin-left: 2vw;
  padding-left: 1vw;
  font-family: "Montserrat", sans-serif;
  color: #fed96a;

  &:hover {
    border: 8px outset #cb273b;
    color: #820010;
    background: linear-gradient(160deg, #fed96a 45%, #f2485d);
  }
  @media screen and (max-width: 480px) and (min-height: 812px) {
    width: 83vw;
  }
`;

export const CityStations = styled.li`
  font-style: italic;
`;

export const NameStations = styled.li`
  font-weight: bold;
  margin-left: 0.5vw;
`;
