import React from 'react';
import {Link} from "react-router-dom";

const NavItem = ({item}) => {

  const url = window.location.pathname

  console.log(url)

  return (
    <>
      {item
      &&
      <Link
        to={item?.url}
        className={`menu-item${item?.url === url ? ' active' : ''}`}
      >
        {item?.name}
      </Link>}
    </>
  );
};

export default NavItem;