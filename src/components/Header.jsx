import Logo1 from '../images/logo1.png';
import styled from  'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: left;
  background-color: #242424;
  height: 10vh;`


const Header = () => {
  return (
    <HeaderStyled>
      <img id="logoHeader" src={Logo1}  alt="logo" />
    </HeaderStyled>
  );
};
export default Header;