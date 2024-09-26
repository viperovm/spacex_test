import React, {useEffect, useState} from 'react';
import NavWrapper from "./NavWrapper";
import {useDispatch, useSelector} from "react-redux";
import {menuAction} from "../../store/actions/siteActions";

const Nav = () => {

  const [active, setActive] = useState()

  const dispatch = useDispatch()
  const { menu } = useSelector(state => state.site)

  useEffect(() => {
    if(!menu.length) {
      dispatch(menuAction())
    }
  }, [menu])

  return (
    <>
      <nav className="menu">
        <NavWrapper items={menu}/>
      </nav>
      <nav className="mobile-menu">
        <svg
          onClick={() => {setActive(a => !a)}}
          className="mobile_menu_icon"
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1.375 1.60229H24.625M1.375 9.00002H24.625M1.375 16.3977H24.625"
                stroke={`#fff`}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
          />
        </svg>
        {active && <NavWrapper items={menu}/>}
      </nav>
    </>
  );
};

export default Nav;