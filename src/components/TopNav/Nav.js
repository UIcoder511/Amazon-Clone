import React from "react";
import AddressPicker from "./AddressPicker";
import NavLinks from "./NavLinks";
import "./Nav.css";

function Nav() {
  const links = [
    "Mobiles",
    "Best Sellers",
    "Today's Deals",
    "Prime",
    "Computers",
    "Pantry",
    "Electronic",
    "sBooks",
    "New Releases",
  ];

  return (
    <nav>
      <AddressPicker name="Umang" />
      <NavLinks links={links} />
    </nav>
  );
}

export default Nav;
