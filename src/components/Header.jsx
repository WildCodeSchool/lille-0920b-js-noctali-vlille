import Logo1 from '../images/logo1.png';
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <img id="logoHeader" src={Logo1}  alt="logo" />
    </header>
  );
};
export default Header;