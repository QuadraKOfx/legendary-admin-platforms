import NavigationBar from "../widgets/common/navbar";
import Navigation from "../widgets/navigation";
import React from "react";
import Footer from "../widgets/common/footer";

const SharedComponents = () => {
    return (
        <>
            <div id="root-inner">
                <NavigationBar/>
                <Navigation/>
            </div>
        </>
    );
}

export default SharedComponents;
