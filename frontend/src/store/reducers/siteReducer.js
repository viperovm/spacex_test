import * as t from "../types"

const initialState = {
  menu: false,
  menu_items: [],
  advantages: [],
}

const siteReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {

    case t.SET_MENU:

      return {
        ...state,
        menu: payload,
      }

    case t.GET_MENU_SUCCESS:

      return {
        ...state,
        menu_items: payload,
      }

    case t.GET_MENU_FAIL:

      return {
        ...state,
        menu_items: [],
      }

    case t.GET_ADVANTAGES_SUCCESS:

      return {
        ...state,
        advantages: payload,
      }

    case t.GET_ADVANTAGES_FAIL:

      return {
        ...state,
        advantages: [],
      }

    default:
      return state
  }
}

export default siteReducer
