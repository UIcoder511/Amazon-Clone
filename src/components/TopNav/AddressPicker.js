import React from "react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

function AddressPicker({ name }) {
  return (
    <a className="address__picker">
      <LocationOnOutlinedIcon className="address__icon" />
      <span className="add__name first__text">Hello {name}</span>
      <span className="second__text">Select your address</span>
    </a>
  );
}

export default AddressPicker;
