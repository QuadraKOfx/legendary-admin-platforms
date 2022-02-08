import {useEffect, useState} from "react";
import {projectAuth} from "../db/firestore";
import {useDispatch} from "react-redux";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {
    listenToAuthChanges,
    registerClient,
    setActiveUser,
    setAuthComplete,
    setOfflineUser
} from "../actions/authActions";
import {useFirestore} from "../../../hooks/firestoreHook";

export const logOutUserHook = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const dispatch = useDispatch();

    const _logoutUser = async () => {
        setError(null);
        setIsPending(true);
        // Dispatch Actions
        dispatch({type: "AUTH_USER_OFFLINE"});
        try {
            const res = await projectAuth.signOut();
            setIsPending(false);
            setError(null);
        }catch (error) {
            console.info(error.message);
        }
    }
    return {_logoutUser, error, isPending}
}

export const loginUserHook = () => {
    const [error, setError] = useState(null);
    const [isCancelled, seIsCancelled] = useState(false);
    const [isPending, setIsPending] = useState(null);
    const dispatch = useDispatch();

    const _loginUser = async (email, password) => {
        setError(null);
        setIsPending(true);

        try {
            const res = await signInWithEmailAndPassword(projectAuth, email, password);
            dispatch(setAuthComplete(res));
            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }
        }catch (error) {
            if (!isCancelled) {
                console.info(error.message);
                setError(error.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() => {
        return () => seIsCancelled(true);
    }, [])

    return {_loginUser, error, isPending}
}


export const registerUserHook = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const {addDocument} = useFirestore("clients");
    const dispatch = useDispatch();

    const _registerUser = async (email, password, payload) => {
        setError(null);
        setIsPending(true);
        try {
            const res = await createUserWithEmailAndPassword(projectAuth, email.trim(), password);
            dispatch(setAuthComplete(res));

            await addDocument({
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: res.user.email,
                industry: payload.industry,
                uid: res.user.uid,
                role: "admin",
            }).catch();

            setIsPending(false);
            setError(null);
        } catch (error) {
            console.error(error.message);
            setError(error.message);
            setIsPending(false);
        }
    }

    return {_registerUser, error, isPending}
}

