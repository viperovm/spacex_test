import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "../pages/home/HomePage";
import {useDispatch, useSelector} from "react-redux";
import {menuAction} from "../store/actions/siteActions";

const MasterRoute = () => {

  const dispatch = useDispatch()
  const { menu } = useSelector(state => state.site)

  useEffect(() => {
    if(!menu.length) {
      dispatch(menuAction())
    }
  }, [menu])

  return (
    <BrowserRouter>
      <Routes>
        {menu.length && menu.map(r => <Route
          path={r.url}
          element={<HomePage/>}
        />)}

      </Routes>
    </BrowserRouter>

  )
}
export default MasterRoute
