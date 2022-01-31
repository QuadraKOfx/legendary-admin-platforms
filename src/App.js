import "./App.css";
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {_routes} from "./configuration/Routes";
import history from "./configuration/history";
import SharedComponents from "./components/pages/shared";
import {Provider, useDispatch, useSelector} from "react-redux";
import configureStore from "./store";
import PageHome from "./components/pages/home/home";
import LoginPage from "./components/pages/auth/login";
import ProfilePage from "./components/pages/profile/profile";
import RegisterPage from "./components/pages/auth/register";
import {projectAuth} from "./store/middleware/db/firestore";
import {setActiveUser} from "./store/middleware/actions/auth";
import {closeSideBar} from "./store/middleware/actions/interactions";
import LoadingView from "./components/widgets/common/loader";

const store = configureStore();

function BootApp() {

    const userState = useSelector(({auth}) => auth.userReducer);
    const sidebar = useSelector(({app}) => app.sidebarReducer);
    const [user, setUser] = useState();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1500);
    }, [])

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (user) {
            dispatch(setActiveUser(user));
        }
    }

    useEffect(() => {
        const unsubscribe = projectAuth.onAuthStateChanged(onAuthStateChanged);
        return unsubscribe();
    }, [])

    useEffect(() => {
        if (sidebar.sidebar && !userState.user) {
            dispatch(closeSideBar());
        }
    }, [userState?.user]);

    return (

        <div>
            {loading === false ? (
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
                    {!userState?.user && <section id="accolades">Accolades</section>}
                    {!userState?.user && <section id="footer">Footer</section>}
                </Router>
            ) : (
                <div style={{height: "100%", width: "100%"}}>
                    <LoadingView/>
                </div>
            )}
        </div>


    );
}

export default function App() {
    return (
        <Provider store={store}>
            <BootApp/>
        </Provider>
    )
}
