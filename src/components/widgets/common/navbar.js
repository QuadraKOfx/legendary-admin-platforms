import React, {useState} from "react";
import "../../../material/assets/styles/widgets.css";
import "../../../material/assets/styles/navbar.css";
import {useDispatch, useSelector} from "react-redux";
import {openSideBar} from "../../../store/middleware/actions/interactions";

export default function NavigationBar() {
    const dispatch = useDispatch();
    const appState = useSelector(({app}) => app.appReducer);

    const toggleSidebar = () => {
        dispatch(openSideBar());
    }

    return (
        <header id="header" className={"clearfix top-bar"}>
            <ul className="h-inner">
                {!appState.welcomeMode &&
                    <li className="menu-trigger" onClick={toggleSidebar}>
                        <i className="zmdi zmdi-menu c-white disabled"/>
                    </li>}
            </ul>
        </header>
    );

}
