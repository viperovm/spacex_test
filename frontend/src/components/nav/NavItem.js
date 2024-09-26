import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {menuAction} from "../../store/actions/siteActions";

const NavItem = ({item}) => {

  const url = window.location.pathname

  const dispatch = useDispatch()

  return (
    <>
      {item
      &&
      <Link
        onClick={() => dispatch(menuAction(false))}
        to={item?.url}
        className={`menu-item${item?.url === url ? ' active' : ''}`}
      >
        {item?.name}
      </Link>}
    </>
  );
};

export default NavItem;