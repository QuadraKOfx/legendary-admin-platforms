import "./App.css";
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {_routes} from "./configuration/Routes";
import history from "./configuration/history";
import SharedComponents from "./components/pages/shared";
import {Provider, useDispatch, useSelector} from "react-redux";
import configureStore from "./store";
import PageHome from "./components/pages/home";
import LoginPage from "./components/pages/auth/login";
import ProfilePage from "./components/pages/profile";
import RegisterPage from "./components/pages/auth/register";
import {closeSideBar} from "./store/middleware/actions/interactions";
import LoadingView from "./components/widgets/common/loader";
import Footer from "./components/widgets/common/footer";
import Accolades from "./components/widgets/common/accolades";
import Snackbar from "./components/widgets/common/snackbar";
import ScrollToTop from "./hooks/scrollToTop";
import CustomersPage from "./components/pages/customers";
import {projectAuth} from "./store/middleware/db/firestore";
import {onAuthStateChanged} from "firebase/auth";
import {setActiveUser, setOfflineUser} from "./store/middleware/actions/authActions";

const store = configureStore();

function BootApp() {

    const userState = useSelector(({auth}) => auth.userReducer);
    const sidebar = useSelector(({app}) => app.sidebarReducer);
    const appState = useSelector(({app}) => app.appReducer);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1500);
    }, [])

    const authChanged = (user) => {
        (user) ? dispatch(setActiveUser(user)) : dispatch(setOfflineUser());
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(projectAuth, authChanged);
        return unsubscribe();
    }, [])

    console.info(userState);

    useEffect(() => {
        if (sidebar.sidebar && !userState.user) {
            dispatch(closeSideBar());
        }
    }, [userState]);

    return (

        <div>
            <Snackbar/>
            {loading === false ? (
                <Router history={history}>
                    <SharedComponents/>
                    <section id="main" className={`${appState.welcomeMode ? "welcome-mode" : ""}`}>
                        <section id="content">
                            <div className={`container-wrapper ${sidebar.sidebar ? "pull-left" : "pull-right"}`}>
                                <div className="container">
                                    <ScrollToTop>
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
                                                   element={!userState?.user ? <RegisterPage {..._routes[2]}/>
                                                       : <Navigate replace to="/" />} exact
                                                   key={`${_routes[2].key}`}/>
                                            <Route path={"/login"}
                                                   element={!userState?.user ? <LoginPage {..._routes[3]}/> :
                                                       <Navigate replace to="/"/>} exact
                                                   key={`${_routes[3].key}`}/>
                                            <Route path={"/customers"}
                                                   element={<CustomersPage {..._routes[4]}/>} exact
                                                   key={`${_routes[4].key}`}/>
                                        </Routes>
                                    </ScrollToTop>
                                </div>
                            </div>
                        </section>
                    </section>
                    {!userState?.user && <section id="accolades"><Accolades/></section>}
                    {!userState?.user && <section id="footer"><Footer/></section>}
                    {!userState?.user && <section id="copyright" className="pad-1 mt-1">
                        © 2022 Legendary Platforms. All rights reserved.
                    </section>}
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
