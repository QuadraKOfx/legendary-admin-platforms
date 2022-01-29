import {applyMiddleware, combineReducers, createStore} from "redux";
import appReducer from "../middleware/reducers/appReducer";
import authReducer from "../middleware/reducers/authReducer";
import thunkMiddleware from "redux-thunk";

export default function configureStore() {

    const mainReducer = combineReducers({
        app: appReducer,
        auth: authReducer
    })

    const rootReducer = (state, action) => {
        return mainReducer(state, action)
    }

    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware));
}
