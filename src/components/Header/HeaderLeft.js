import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./amazon-logo.png";

function HeaderLeft() {
  return (
    <div className="header__left">
      <a href="" className="menu__hamburger">
        <MenuIcon fontSize="large" />
      </a>
      <a href="" className="logo">
        <img src={logo} alt="" className="amazon__logo" />
        <span className="country">.in</span>
      </a>
    </div>
  );
}

export default HeaderLeft;
