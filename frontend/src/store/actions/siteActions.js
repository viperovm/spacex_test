import * as t from "../types"
import axios from "axios";


export const menuAction = () => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };

  try {
    const res = await axios.get(`http://127.0.0.1:8000/api/menu/`, config);

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
    const res = await axios.get(`http://127.0.0.1:8000/api/advantages/`, config);

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
