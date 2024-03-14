import { NavLink } from "react-router-dom";
import logo from "/images/logo.svg";

export const Header = () => {
  return (
    <header>
      <NavLink to="/" className="logo-wrap">
        <img src={logo} alt="aoinix" />
        <h1 className="logo" hidden>
          Aonix
        </h1>
      </NavLink>
    </header>
  );
};
