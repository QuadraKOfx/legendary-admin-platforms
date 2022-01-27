import NavigationBar from "../../widgets/navbar";
import Navigation from "../../widgets/navigation";
import React from "react";

const SharedComponents = (props) => {
    const { page } = props;
    return (
        <div>
            <NavigationBar />
            <Navigation {...props}/>
        </div>
    );
}

export default SharedComponents;
