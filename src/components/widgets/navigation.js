import React, {useEffect, useState} from "react";
import {_routes} from "../../utils/Routes";
import "../../utils/styles/sidebar.css";
import "../../utils/styles/navbar.css";
import "../../utils/styles/buttons.css";
import {useDispatch, useSelector} from "react-redux";
import {closeSideBar, setActiveRoute} from "../../middleware/actions/interactions";
import {Link} from "react-router-dom";
import _ from "lodash";
import user from "../../utils/assets/images/test_avatar.png";
import {logOutUserHook} from "../../middleware/api/auth";

const NavigationRoute = ({path, icon}) => {

    const dispatch = useDispatch();
    const sidebarState = useSelector(({app}) => app.sidebarReducer);
    const className = sidebarState.route === path ? "active" : "";

    const _setActiveRoute = () => {
        dispatch(setActiveRoute(path));
    }

    const page = _.find(_routes, {
        route: path,
    });

    return (
        <li className={className}>
            <Link to={path} onClick={_setActiveRoute}>
                {icon ? <i className={`zmdi zmdi-${icon}`}/> : null}
                {page.alt}
            </Link>
        </li>
    )
}

export default function Navigation() {
    const dispatch = useDispatch();
    const sidebarState = useSelector(({app}) => app.sidebarReducer);
    const {_logoutUser, isPending, error} = logOutUserHook();

    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });
    
    const toggleSidebar = () => {
        dispatch(closeSideBar());
    }

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener("resize", setDimension);
        return(() => {
            window.removeEventListener("resize", setDimension);
        })
    }, [screenSize])

    const handleSubmit = (e) => {
        e.preventDefault();
        // todo use registerUserHook to register Users
        _logoutUser().then(() => {
            console.info("success");
        }).catch((error) => {
            console.info(error);
        })
    }

    if (sidebarState && (screenSize.dynamicWidth >= 1441)) {
        console.info("OPEN SIDE BAR");
    }

    return (
        <div className={`side-wrapper ${sidebarState.sidebar ? "toggled" : "toggled-off"}`} >
            <aside id="sidebar">
                <div className="sidebar-top">
                    <div className="sidebar-top-picture">
                        <img src={user} alt="avatar"/>
                        <button type="button" className="clean-btn sidebar-close">
                            {sidebarState.sidebar ?
                                <i onClick={toggleSidebar} className="zmdi zmdi-arrow-left"/> : null}
                        </button>
                    </div>

                    <div className="sidebar-top-info">
                        {/* WHICH STORE IS USING THE PLATFORM */}
                        <div>
                            <div className="sidebar-top-info-header">
                                ??????????????????
                            </div>
                            <div className="sidebar-top-info-shop-name">JMs - Service</div>
                        </div>
                        {/* WHAT IS THE STORE ID (IF ANY) */}
                        <div style={{marginTop: 5}}>
                            <div className="sidebar-top-info-header">
                                ??????. ????????????????????????
                            </div>
                            <div className="sidebar-top-info-shopid">
                                1273461
                            </div>
                        </div>

                        {/* WHAT IS THE STORE ID (IF ANY) */}
                        <div style={{marginTop: 5}}>
                            <div className="sidebar-top-info-header">
                                ADMIN
                            </div>
                            <div className="sidebar-top-info-shopid">
                                Marios
                            </div>
                        </div>
                    </div>

                </div>

                <ul className="main-menu main-menu-slim b-b-lightgray" style={{margin: "0 0 16px 0"}}>
                    <li onClick={handleSubmit}>
                        <Link to={"/"}><i className="him-icon zmdi zmdi-power"/> Logout </Link>
                    </li>
                </ul>

                <ul className={"main-menu"}>
                    <NavigationRoute path={_routes[0].route} title="Home Page" icon="home"/>
                    <NavigationRoute path={_routes[1].route} title="Profile Page" icon="account-circle"/>
                    <NavigationRoute path={_routes[2].route} title="Register Page"/>
                    <NavigationRoute path={_routes[3].route} title="Login Page"/>
                </ul>

            </aside>
        </div>
    );
}
