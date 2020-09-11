import React from "react";
import { Badge, IconButton } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function HeaderRight({ name, cartItemLength }) {
  return (
    <div className="header__right">
      <a className="header__right__options" href="">
        <span className="first__text">Hello,{name}</span>
        <span className="second__text">Account & Lists</span>
      </a>
      <a className="header__right__options" href="">
        <span className="first__text">Returns</span>
        <span className="second__text">& Orders</span>
      </a>
      <a className="header__right__options" href="">
        <span className="first__text">Try</span>
        <span className="second__text">Prime</span>
      </a>
      <a className="header__right__cart" href="">
        <span className="first__text">
          {/* <IconButton aria-label="show 11 new notifications" color="inherit"> */}
          <Badge badgeContent={cartItemLength} className="cart__badge">
            <ShoppingCartOutlinedIcon />
          </Badge>
          {/* </IconButton> */}
        </span>
        <span className="second__text">Cart</span>
      </a>
    </div>
  );
}

export default HeaderRight;
