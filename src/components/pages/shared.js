import NavigationBar from "../widgets/navbar";
import Navigation from "../widgets/navigation";
import React from "react";

const SharedComponents = () => {
    return (
        <div id="root-inner">
            <NavigationBar/>
            <Navigation/>
        </div>
    );
}

export default SharedComponents;
