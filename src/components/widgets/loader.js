import React from "react";

function Loader() {
    return (
        <div className="sk-chase">
            <div className="sk-chase-dot"/>
            <div className="sk-chase-dot"/>
            <div className="sk-chase-dot"/>
            <div className="sk-chase-dot"/>
            <div className="sk-chase-dot"/>
            <div className="sk-chase-dot"/>
        </div>
    );
}

export default function LoadingView({message = "Just one moment please..."}) {
    return (
        <div className="loading-screen">
            <div className="loading-view">
                <div className="loading-view-container">
                    <div className="mb-3">{message}</div>
                    <Loader />
                </div>
            </div>
        </div>
    )
}
