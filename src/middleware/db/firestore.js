import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB2Wt8qSFWdcm6KoW940yq2VWcmqgswG8E",
    authDomain: "jms-management-system.firebaseapp.com",
    databaseURL: "https://jms-management-system.firebaseio.com",
    projectId: "jms-management-system",
    storageBucket: "jms-management-system.appspot.com",
    messagingSenderId: "1038874694396",
    appId: "1:1038874694396:web:814d649282cd5f9ac6fd79"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export {projectFirestore, projectAuth}

// export default firebase.initializeApp(firebaseConfig).firestore();
