import React from "react";
import NavigationBar from "../widgets/navbar";
import Navigation from "../widgets/navigation";

const Main = (props) => {

    const { children, page } = props;
    console.error("MAIN COMPONENT PROPS => ", props);

    return (
        <div>
            <NavigationBar />
            <Navigation {...props}/>

            <section id="main">
                <section id="content">
                    <div className="container">
                        <div className="container-no-gutter">
                            <div className={`flexbox ${page.key}`}>

                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Main;
