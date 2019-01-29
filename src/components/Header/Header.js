import React from "react";
import "../Header/header.css";
import logo from "../Header/houser_logo.png";
const Header = () => {
  return (
    <div className="header-content">
      <img src={logo} alt="logo" s />
      <h1>Houser</h1>
    </div>
  );
};

export default Header;
