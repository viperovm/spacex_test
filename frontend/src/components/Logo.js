import React from 'react';
import logo from "../assets/img/logo-spacex.svg";
import {Link} from "react-router-dom";
import {menuAction} from "../store/actions/siteActions";
import {useDispatch} from "react-redux";

const Logo = () => {

  const dispatch = useDispatch()

  return (
    <Link to={'/'} className="logo-wrapper">
      <div
        onClick={() => dispatch(menuAction(false))}
        className="logo"
      >
        <img src={logo} alt=""/>
      </div>
    </Link>
  );
};

export default Logo;