import * as React from "react";
import { Logo } from "../../assets";
import "./appLogo.scss";
const AppLogo: React.FC = () => {
  return (
    <div className="appLogo">
      <figcaption className="appLogo__logo">
        <img src={Logo} alt="logo" />
        <caption>DROP</caption>
      </figcaption>
    </div>
  );
};

export default AppLogo;
