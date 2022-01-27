import React from "react";
import {_routes} from "../../utils/Routes";
import "../../utils/styles/sidebar.css";
import "../../utils/styles/navbar.css";
import {useDispatch, useSelector} from "react-redux";
import {closeSideBar, setActiveRoute} from "../../actions/interactions";
import {Link} from "react-router-dom";
import _ from "lodash";
import user from "../../utils/assets/images/test_avatar.png";

const NavigationRoute = ({route, children, icon}) => {
    const dispatch = useDispatch();
    const sidebarState = useSelector(({app}) => app.sidebarReducer);
    const className = sidebarState.route === route ? "active" : "";

    const _setActiveRoute = () => {
        dispatch(setActiveRoute(route));
    }

    const page = _.find(_routes, {
        route: route,
    });

    return (
        <li className={className}>
            <Link to={route} onClick={_setActiveRoute}>
                {icon ? <i className={`zmdi zmdi-${icon}`}/> : null}
                {page.alt}
            </Link>
            {children ? <ul className="show">{children}</ul> : null}
        </li>
    )
}

export default function Navigation() {
    const dispatch = useDispatch();
    const sidebarState = useSelector(({app}) => app.sidebarReducer);
    const toggleSidebar = () => {
        dispatch(closeSideBar());
    }

    return (
        <div onClick={toggleSidebar} className={sidebarState.sidebar ? "sidebar-front-drop" : ""}>
            <aside id="sidebar" className={`sidebar c-overflow ${sidebarState.sidebar ? "toggled" : ""}`}>

                <div className="sidebar-top">
                    <div className="sidebar-top-picture">
                        {/*<img src={this.getShopLogo()} alt="" />*/}
                        <img src={user} alt="avatar"/>
                    </div>

                    <div className="sidebar-top-info">
                        {/* WHICH STORE IS USING THE PLATFORM */}
                        <div>
                            <div className="sidebar-top-info-header">
                                ΚΑΤΑΣΤΗΜΑ
                            </div>
                            <div className="sidebar-top-info-shop-name">JMs - Service</div>
                        </div>
                        {/* WHAT IS THE STORE ID (IF ANY) */}
                        <div style={{marginTop: 5}}>
                            <div className="sidebar-top-info-header">
                                ΚΩΔ. ΚΑΤΑΣΤΗΜΑΤΟΣ
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
                    <li onClick={() => console.info("Log-ing out => ")}>
                        <Link to={"/"}><i className="him-icon zmdi zmdi-power"/> Logout </Link>
                    </li>
                </ul>

                <ul className={"main-menu"}>
                    <NavigationRoute {..._routes[0]} title="Home Page" icon="home"/>
                    <NavigationRoute {..._routes[1]} title="Profile Page" icon="account-circle"/>
                </ul>

            </aside>
        </div>
    );
}
