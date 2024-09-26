import React from 'react';
import NavItem from "./NavItem";

const NavWrapper = ({items = []}) => {
  return (
    <div className="menu-wrapper">
      {items.length && items.map((item, index) =>
        <NavItem key={index} item={item}/>
      )}
    </div>
  );
};

export default NavWrapper;