import React from "react";
import "../../utils/styles/widgets.css";

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    open() {
        console.info("Opening Navigation Bar");
    }

    render() {
        return (
            <header id="header" className={"clearfix top-bar"}>

                <ul className="h-inner">
                    <li className="menu-trigger" onClick={() => this.open()}>
                        <i className="zmdi zmdi-menu c-white" />
                    </li>
                </ul>

            </header>
        );
    }


}
