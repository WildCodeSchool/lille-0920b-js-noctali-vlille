import Logo1 from "../images/logo1.png";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #242424;
  height: 10vh;
`;

const LogoHeader = styled.img`
  height: 6vh;
  padding-left: 1vw;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <LogoHeader id="logoHeader" src={Logo1} alt="logo" />
    </HeaderStyled>
  );
};
export default Header;
