export const setActiveUser = (user) => (dispatch) => {
    dispatch({type: "SET_ACTIVE_USER", data: user});
}

export const setOfflineUser = () => (dispatch) => {
    dispatch({type: "SET_OFFLINE_USER", data: null});
}

export const setAuthComplete = (user) => (dispatch) => {
    dispatch({type: "AUTH_LOGIN_DONE", payload: user.user});
}




