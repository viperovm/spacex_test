import * as t from "../types"
import axios from "axios";


export const menuAction = bool => dispatch => {

  dispatch({
    type: t.SET_MENU,
    payload: bool,
  })
}


export const menuItemsAction = () => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };

  try {
    const res = await axios.get(`http://art-bid.online/api/menu/`, config);

    dispatch({
      type: t.GET_MENU_SUCCESS,
      payload: res.data,
    })
  } catch (err) {

    dispatch({
      type: t.GET_MENU_FAIL
    })
  }
}

export const advantagesAction = () => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };

  try {
    const res = await axios.get(`http://art-bid.online/api/advantages/`, config);

    dispatch({
      type: t.GET_ADVANTAGES_SUCCESS,
      payload: res.data,
    })
  } catch (err) {

    dispatch({
      type: t.GET_ADVANTAGES_FAIL
    })
  }
}
