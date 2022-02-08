

export default function clientReducer(state = null, action) {
    switch (action.type) {
        case "USER_FIREBASE_SET":
            return {...state, user: action.payload};
        default:
            return state;
    }
}


