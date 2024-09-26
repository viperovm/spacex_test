import React from 'react';
import {Link} from "react-router-dom";

const NavItem = ({item}) => {
  return (
    <>
      {item && <Link to={item?.url} className="menu-item">{item?.name}</Link>}
    </>
  );
};

export default NavItem;