import {applyMiddleware, combineReducers, createStore} from "redux";
import appReducer from "../reducers/appReducer";
import thunkMiddleware from "redux-thunk";

export default function configureStore() {

    const mainReducer = combineReducers({
        app: appReducer,
    })

    const rootReducer = (state, action) => {

        return mainReducer(state, action)
    }

    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware));
}
