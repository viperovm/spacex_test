import React from 'react';
import logo from "../assets/img/logo-spacex.svg";
import Logo from "./Logo";
import Nav from "./nav/Nav";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="container">
          <Logo/>
          <Nav/>
        </div>
      </div>
    </header>
  );
};

export default Header;