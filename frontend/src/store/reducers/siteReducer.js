import * as t from "../types"

const initialState = {
  menu: [],
  advantages: [],
}

const siteReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {

    case t.GET_MENU_SUCCESS:

      return {
        ...state,
        menu: payload,
      }

    case t.GET_MENU_FAIL:

      return {
        ...state,
        menu: [],
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
