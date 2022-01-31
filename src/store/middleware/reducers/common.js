export const createIsFetchingReducer = (actionType) => (state = false, action) => {
    switch (action.type) {
        case `${actionType}_INIT`:
            return true;
        case `${actionType}_SUCCESS`:
            return true;
        case `${actionType}_ERROR`:
            return false;
        default:
            return state;
    }
}
        
