export const openSideBar = () => (dispatch) => {
    dispatch({type: "SIDEBAR_SET_OPEN"})
}

export const closeSideBar = () => (dispatch) => {
    dispatch({type: "SIDEBAR_SET_CLOSE"})
}

export const setActiveRoute = (route) => (dispatch) => {
    dispatch({type: "SET_ACTIVE_ROUTE", data: route});
}
