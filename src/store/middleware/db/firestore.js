import {initializeApp} from "firebase/app";
import {getFirestore, Timestamp} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import firebaseConfig from "./firebase.config";

// init firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const projectAuth = getAuth();

export {projectAuth, db, Timestamp}
