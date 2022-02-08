import React, {combineReducers} from "redux";
import firestoreReducer from "./firestoreReducer";
import clientReducer from "./clientReducer";

const APP_INITIAL_STATE = {
    welcomeMode: false,
    isCookieConsent: false,
};

function createRootReducer() {

    const appReducer = (state = APP_INITIAL_STATE, action) => {
        switch (action.type) {
            case "SET_SHOW_WELCOME":
                return {...state, welcomeMode: true}
            case "SET_CLOSE_WELCOME":
                return {...state, welcomeMode: false}
            default:
                return state;
        }
    }

    const sidebarReducer = (state = {sidebar: false, route: null}, action) => {
        switch (action.type) {
            case "SIDEBAR_SET_OPEN":
                return {...state, sidebar: true};
            case "SIDEBAR_SET_CLOSE":
                return {...state, sidebar: false};
            case "SET_ACTIVE_ROUTE":
                return {...state, route: action.data};
            default: {
                return state;
            }
        }
    }

    return combineReducers({
        sidebarReducer,
        clientReducer,
        firestoreReducer,
        appReducer
    })
}

export default createRootReducer();
