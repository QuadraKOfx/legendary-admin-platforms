import firebase from "firebase/compat/app";
import firebaseConfig from "./firebase.config";

export const getFirebaseApp = () => {
    console.info(firebaseConfig);
    return firebase.initializeApp(firebaseConfig);
};
