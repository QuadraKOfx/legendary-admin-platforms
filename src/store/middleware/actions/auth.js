export const setActiveUser = (user) => (dispatch) => {
    dispatch({type: "SET_ACTIVE_USER", data: {user, isDev:true}});
}

export const setOfflineUser = () => (dispatch) => {
    dispatch({type: "SET_OFFLINE_USER", data: null});
}


