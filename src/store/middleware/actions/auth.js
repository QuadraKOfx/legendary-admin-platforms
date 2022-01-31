import * as api from "../api/auth";

// export const registerUser = (formData) => (dispatch) => {
//     // dispatch({type: "AUTH_REGISTER_INIT"});
//     return api.registerUser(formData)
//         .then((user) => dispatch({type: "AUTH_REGISTER_SUCCESS", user}))
//         .catch((error) => dispatch({type: "AUTH_REGISTER_ERROR", error}))
// }

// export const listenToAuthChanges = () => (dispatch) => {
//     return api.onAuthStateChanges(async (authUser) => {
//         if (authUser) {
//             // const userProfile = await api.getUserProfile(authUser.uid);
//             // const userProfile = null;
//             dispatch({type: "AUTH_USER_DONE", payload: authUser});
//         } else {
//             dispatch({type: "AUTH_LOGIN_ERROR"});
//         }
//     })
// }

export const setActiveUser = (user) => (dispatch) => {
    dispatch({type: "SET_ACTIVE_USER", data: {user, isDev:true}});
}

export const setOfflineUser = () => (dispatch) => {
    dispatch({type: "SET_OFFLINE_USER", data: null});
}


