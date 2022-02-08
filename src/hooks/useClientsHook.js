import {useEffect, useState} from "react";
import {db} from "../store/middleware/db/firestore";
import {collection, doc, getDoc} from "firebase/firestore";
import {registerClient} from "../store/middleware/actions/authActions";
import {useDispatch} from "react-redux";
import {setFirebaseUser} from "../store/middleware/actions/clientsActions";


export const useClientsHook = (path) => {
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const getCollection = async (uid) => {
        const ref = doc(db, path, uid);
        const res = await getDoc(ref);

        if (res.exists()) {
            console.info("Document data => ", res.data());
            dispatch(setFirebaseUser(res.data()));
            setError(null);
        } else {
            console.error("No data found");
            setError("No data");
        }
    }
    return {error, getCollection};
}
