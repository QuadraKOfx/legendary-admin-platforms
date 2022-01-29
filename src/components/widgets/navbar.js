import React, {useState} from "react";
import "../../utils/styles/widgets.css";
import "../../utils/styles/navbar.css";
import {useDispatch} from "react-redux";
import {openSideBar} from "../../middleware/actions/interactions";

export default function NavigationBar() {
    const dispatch = useDispatch();

    const toggleSidebar = () => {
        dispatch(openSideBar());
    }

    return (
        <header id="header" className={"clearfix top-bar"}>
            <ul className="h-inner">
                <li className="menu-trigger" onClick={toggleSidebar}>
                    <i className="zmdi zmdi-menu c-white" />
                </li>
            </ul>
        </header>
    );

}
