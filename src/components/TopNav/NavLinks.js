import React from "react";

function NavLinks({ links }) {
  return (
    <div className="nav__links">
      {links.map((link) => (
        <a href="" className="nav__link first__text">
          {link}
        </a>
      ))}
    </div>
  );
}

export default NavLinks;
