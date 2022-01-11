import UserActionTypes from './user.types'

const INITIAL_STATE = { 
    currentUser: null,
    lastError: null 
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SIGN_UP_SUCCESS:
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                lastError: null
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
          return {
            ...state,
            currentUser: null,
            lastError: null            
          }
        case UserActionTypes.SIGN_UP_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_IN_FAILURE:
          return {
            ...state,
            lastError: action.payload
          }
        default:
            return state;
    }
}