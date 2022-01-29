import React, {combineReducers} from "redux"

function createAuthReducer() {

    const userReducer = (state = null, action) => {
        switch (action.type) {
            case "AUTH_LOGIN_DONE":
                return {...state, user: action.payload};
            case "AUTH_LOGIN_ERROR":
                return null;
            case "AUTH_USER_OFFLINE":
                return {...state, user: null};
            case "SET_ACTIVE_USER":
                return {...state, user: action.data};
            default:
                return state;
        }
    }

    return combineReducers({
        userReducer
    })
}

export default createAuthReducer();

