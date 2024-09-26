import React from 'react';
import logo from "../assets/img/logo-spacex.svg";
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <Link to={'/'} className="logo-wrapper">
              <div className="logo">
                <img src={logo} alt=""/>
              </div>
            </Link>
  );
};

export default Logo;