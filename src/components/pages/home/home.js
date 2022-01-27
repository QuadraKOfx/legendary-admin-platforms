import React from "react";
import "../../../utils/styles/home.css";
import "./home.css";
import Main from "../main";

function WelcomeScreen() {

    return (
        <div className="card">
            <div style={{ textAlign: "center", paddingTop: 40, paddingBottom: 40 }}>
                <div style={{ paddingBottom: 24 }}>
                    <img
                        alt=""
                        style={{ width: 64 }}
                    />
                </div>
                <div className="welcome-to-portal"/>
            </div>
        </div>
    );
}

function PageHome({page}) {
    console.info("home => ", page);
    return (
        <div className={`row ${page.key}`}>

        </div>
    );
}

export default PageHome;
