import React from "react";
import { Link } from "react-router-dom";
import "../style/HotAccessoriesMenu.css"


const HotAccessoriesMenu = () => {
  return (
    <div className="HotAccessoriesMenu">
      <Link className="HotAccessoriesLink" to="/music">
        Music Stores
      </Link>
      <Link className="HotAccessoriesLink" to="/smartDevice">
        Smart Devices
      </Link>
      <Link className="HotAccessoriesLink" to="/home">
        Home
      </Link>
      <Link className="HotAccessoriesLink" to="/lifestyle">
        LifeStyle
      </Link>
      <Link className="HotAccessoriesLink" to="/mobileaccessories">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default HotAccessoriesMenu;
