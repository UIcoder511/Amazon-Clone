import React, { useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";

function HeaderMid() {
  useEffect(() => {
    changeSelectWidth(document.querySelector("#options"));
  }, []);

  const changeSelectWidth = (ele) => {
    const op = ele.options[ele.selectedIndex];
    // e.target.style.width = `${l * 1 + 20}px`;
    const x = document.createElement("select");
    const y = document.createElement("option");

    x.style.fontSize = window
      .getComputedStyle(ele, null)
      .getPropertyValue("font-size");
    y.innerHTML = op.innerHTML;
    x.appendChild(y);
    document.body.appendChild(x);
    // console.log(window.getComputedStyle(y, null).getPropertyValue("font-size"));
    //console.log(x.offsetWidth);
    ele.style.width = `${x.offsetWidth}px`;
    document.body.removeChild(x);
  };

  return (
    <div className="header__mid__search">
      <div className="amazon__search__dropdown">
        <select
          id="options"
          name="options"
          onChange={(e) => changeSelectWidth(e.target)}
        >
          <option>All</option>
          <option>1111111111111111111111</option>
          <option>2</option>
          <option>2</option>
          <option>Alexa</option>
        </select>
      </div>
      <form>
        <input type="text" className="search" />
        <div className="search__btn">
          {/* <input type="submit" value="" className="search__btn" /> */}
          <button type="submit" className="search__btn">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default HeaderMid;
