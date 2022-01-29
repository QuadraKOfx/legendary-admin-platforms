import React from "react";
import "../../../utils/styles/home.css";
import "./home.css";
import Main from "../main";

function PageHome(props) {
    console.info(props);
    return (
        <div className={`row homePage`} key={`key-${props.alt}`}>

        </div>
    );
}

export default PageHome;
