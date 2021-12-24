import * as React from "react";
import { Logo } from "../../assets";

const AppLogo: React.FC = () => {
  return (
    <div className="flex justify-center bg-[color:var(--dark-blue)] p-3 border-b border-solid border-[color:var(--light-dark-blue)]">
      <figure className="flex">
        <img src={Logo} alt="logo" className="w-10 h-10" />
        <figcaption className="self-center ml-1 text-white">DROP</figcaption>
      </figure>
    </div>
  );
};

export default AppLogo;
