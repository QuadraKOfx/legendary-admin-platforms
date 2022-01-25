import React, {Component} from "react";
import {_routes} from "../../utils/Routes";
import history from "../../configuration/history";
import "../../utils/styles/sidebar.css";

const NavigationRoute = ({route, children, icon}) => {

    let className = history.location.pathname === route ? "active" : "";

    if (children) {
        className = `${className} sub-menu toggled sub-menu-no-icon`;
        console.info(className);
    }

    return (
        <li className={className}>
            <a onClick={() => console.info("Navigating to selected Route => ", route)}>
                {icon ? <i className={`zmdi zmdi-${icon}`}/> : null}
                Test Title
            </a>
            {children ? <ul className="show">{children}</ul> : null}
        </li>
    )
}

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggled: false,
            vertical: "",
        };
    }

    logout() {
        console.info("Login out soon");
    }

    close() {
        this.setState({toggled: false});
    }

    open() {
        this.setState({toggled: true});
    }

    render() {
        const {toggled} = this.state;
        console.info(toggled);
        return (
            <div onClick={() => this.close()} className={toggled ? "sidebar-front-drop" : ""}>
                <aside id="sidebar" className={`sidebar c-overflow ${toggled ? "toggled" : ""}`}>

                    <div className="sidebar-top">
                        <div className="sidebar-top-picture">
                            {/*<img src={this.getShopLogo()} alt="" />*/}
                            <img src={"https://assets.foody.com.cy/gravatar/no-avatar2.png"} alt="avatar"/>
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
                        <li onClick={() => this.logout()}>
                            <a><i className="him-icon zmdi zmdi-power"/> Logout </a>
                        </li>
                    </ul>

                    <ul className={"main-menu"}>
                        <NavigationRoute {..._routes[0]} title="Home Page" icon="home"/>
                    </ul>

                </aside>
            </div>
        );
    }
}
