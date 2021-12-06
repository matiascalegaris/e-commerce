import { SET_CURRENT_USER } from "./user-reducer"
export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
})