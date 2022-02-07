import {useEffect, useState} from "react";
import {db} from "../store/middleware/db/firestore";
import {collection, doc, getDoc} from "firebase/firestore";


export const useClientsHook = (path) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    const getCollection = async (uid) => {
        console.info(uid);
        const ref = doc(db, path, uid);
        const res = await getDoc(ref);

        if (res.exists()) {
            console.info("Document data => ", res.data());
        } else {
            console.error("No data found");
        }
    }

    return {documents, error, getCollection};
}
