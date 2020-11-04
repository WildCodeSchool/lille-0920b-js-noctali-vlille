import React from "react";
import "./Footer.scss";
import logoGps from "../images/logoGps.png";
import logoLock from "../images/logoLock.png";

function Footer() {
  return (
    <div className="MainFooter">
      <img src={logoGps} alt="toto"></img>
      <img src={logoLock} alt="toto"></img>
    </div>
  );
}

export default Footer;
