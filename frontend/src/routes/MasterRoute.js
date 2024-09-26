import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "../pages/home/HomePage";
import {useDispatch, useSelector} from "react-redux";
import {menuItemsAction} from "../store/actions/siteActions";

const MasterRoute = () => {

  const dispatch = useDispatch()
  const { menu_items } = useSelector(state => state.site)

  useEffect(() => {
    if(!menu_items.length) {
      dispatch(menuItemsAction())
    }
  }, [menu_items])

  return (
    <BrowserRouter>
      <Routes>
        {menu_items.length && menu_items.map(r => <Route
          path={r.url}
          element={<HomePage/>}
        />)}

      </Routes>
    </BrowserRouter>

  )
}
export default MasterRoute
