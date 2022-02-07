import {useFirestore} from "../../../hooks/firestoreHook";

export const setActiveUser = (user) => (dispatch) => {
    dispatch({type: "SET_ACTIVE_USER", data: user});
}

export const setOfflineUser = () => (dispatch) => {
    dispatch({type: "SET_OFFLINE_USER", data: null});
}

export const registerClient = (formData) => () => {
    const {addDocument} = useFirestore("clients");
    return addDocument(formData).catch();
}


