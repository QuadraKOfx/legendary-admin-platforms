const initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

export default function firestoreReducer(state = initialState, action) {
    switch (action.type) {
        case "IS_PENDING":
            return {isPending: true, document: null, success: false, error: null}
        case "ADDED_DOCUMENT":
            return {isPending: false, document: action.payload, success: true, error: null}
        case "ERROR":
            return {isPending: false, document: null, success: false, error: action.payload}
        default:
            return state;
    }
}
