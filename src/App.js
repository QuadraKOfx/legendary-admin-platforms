import "./App.css";
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {_routes} from "./utils/Routes";
import history from "./configuration/history";
import SharedComponents from "./components/pages/shared";

const store = configureStore();
import {Provider, useDispatch, useSelector} from "react-redux";
import configureStore from "./store";
import PageHome from "./components/pages/home/home";
import LoginPage from "./components/pages/auth/login";
import ProfilePage from "./components/pages/profile/profile";
import RegisterPage from "./components/pages/auth/register";
import {projectAuth} from "./middleware/db/firestore";
import {setActiveUser} from "./middleware/actions/auth";
import {closeSideBar} from "./middleware/actions/interactions";

function BootApp() {

    const userState = useSelector(({auth}) => auth.userReducer);
    const sidebar = useSelector(({app}) => app.sidebarReducer);
    const [user, setUser] = useState();
    const dispatch = useDispatch();

    const onAuthStateChanged = (user) => {
        setUser(user);
        dispatch(setActiveUser(user));
    }

    console.info(process.env);

    useEffect(() => {
        const unsubscribe = projectAuth.onAuthStateChanged(onAuthStateChanged);
        return unsubscribe();
    }, [])

    useEffect(() => {
        if (sidebar.sidebar && !userState.user) {
            dispatch(closeSideBar());
        }
    }, [userState?.user]);

    // console.info(sidebar, userState);

    return (

        <Router history={history}>
            <SharedComponents/>
            <section id="main">
                <section id="content">
                    <div className={`container-wrapper ${sidebar.sidebar ? "pull-left" : "pull-right"}`}>
                        <div className="container">
                            <Routes>
                                <Route path="/"
                                       element={userState?.user ? <PageHome {..._routes[0]}/> :
                                           <Navigate replace to="/login"/>} exact
                                       key={`${_routes[0].key}`}/>
                                <Route path={"/profile"}
                                       element={userState?.user ? <ProfilePage {..._routes[1]}/> :
                                           <Navigate replace to="/login"/>} exact
                                       key={`${_routes[1].key}`}/>
                                <Route path={"/register"}
                                       element={<RegisterPage {..._routes[2]}/>} exact
                                       key={`${_routes[2].key}`}/>
                                <Route path={"/login"}
                                       element={!userState?.user ? <LoginPage {..._routes[3]}/> :
                                           <Navigate replace to="/"/>} exact
                                       key={`${_routes[3].key}`}/>
                            </Routes>
                        </div>
                    </div>
                </section>
            </section>
        </Router>
    );
}

export default function App() {
    return (
        <Provider store={store}>
            <BootApp/>
        </Provider>
    )
}
