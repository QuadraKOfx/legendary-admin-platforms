export const setFirebaseUser = (user) => (dispatch) => {
    dispatch({type: "USER_FIREBASE_SET", payload: user});
}
