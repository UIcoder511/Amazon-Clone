import React from "react";

import "./Header.css";
// import { Select } from "@material-ui/core";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderMid from "./HeaderMid";

function Header() {
  return (
    <header>
      <HeaderLeft />
      <HeaderMid />
      <HeaderRight name=" Sign in" cartItemLength={1} />
    </header>
  );
}

export default Header;
