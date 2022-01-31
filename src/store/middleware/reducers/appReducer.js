import React, {combineReducers} from "redux";

function createPostsReducer() {

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
    })
}

export default createPostsReducer();
