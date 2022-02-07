import {db, Timestamp} from "../store/middleware/db/firestore";
import {setDoc, collection, doc} from "firebase/firestore";

export const useFirestore = (collectionName) => {

    // Add collection
    const addDocument = async (note) => {
        const ref = doc(note.uid).collection(db, collectionName);
        const createdAdd = Timestamp.fromDate(new Date())
        const _payload = {...note, createdAdd};
        await setDoc(ref, _payload);
    }

    // Delete a document
    const deleteDocument = (doc) => {

    }

    return {addDocument, deleteDocument};
}

