import {useEffect, useState} from "react";
import {projectFirestore} from "../db/firestore";

export const useFirestore = (collection) => {
    const [isCancelled, setIsCancelled] = useState(false);

    // collection Ref
    const ref = projectFirestore.collection(collection);

    // add a collection
    const addDocument = (doc) => {

    }

    // delete a document
    const deleteDocument = (doc) => {

    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);
}
