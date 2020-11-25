import Logo1 from "../images/logo1.png";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import { useState } from "react";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #242424;
  height: 10vh;
  width: 100vw;
  @media screen and (max-width: 480px) and (min-height: 812px) {
    &.resizeInput {
      justify-content: center;
    }
  }
`;

const LogoHeader = styled.img`
  height: 6vh;
  padding-left: 2vw;
  @media screen and (max-width: 480px) and (min-height: 812px) {
    width: 40vw;
    &.resizeInput {
      display: none;
    }
  }
`;

const Header = () => {
  const [inputResized, setInputResized] = useState(false);

  return (
    <HeaderStyled className={inputResized ? "resizeInput" : ""}>
      <LogoHeader
        className={inputResized ? "resizeInput" : ""}
        id="logoHeader"
        src={Logo1}
        alt="logo"
      />
      <SearchBar
        className={inputResized ? "resizeInput" : ""}
        onClick={() => setInputResized(true)}
      />
    </HeaderStyled>
  );
};
export default Header;
