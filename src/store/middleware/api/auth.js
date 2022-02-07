import {useEffect, useState} from "react";
import {projectAuth} from "../db/firestore";
import {useDispatch} from "react-redux";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {listenToAuthChanges, setActiveUser, setOfflineUser} from "../actions/authActions";

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
            // Dispatch Actions
            dispatch({type: "AUTH_LOGIN_DONE", payload: res.user});

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

// todo decide compared to the above function
export const registerUserHook = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const [user, setUser] = useState(null);

    const _registerUser = async (email, password, userName) => {
        setError(null);
        setIsPending(true);
        try {
            const user = await createUserWithEmailAndPassword(projectAuth, email.trim(), password);
            setUser(user.user);
            setIsPending(false);
            setError(null);
        } catch (error) {
            console.error(error.message);
            setError(error.message);
            setIsPending(false);
        }
    }
    return {_registerUser, error, isPending, user}
}

