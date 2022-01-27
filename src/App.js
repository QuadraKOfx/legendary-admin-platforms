import "./App.css";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {_routes} from "./utils/Routes";
import history from "./configuration/history";
import _ from "lodash";
import SharedComponents from "./components/pages/profile/shared";

export class BootApp extends React.Component {

    constructor(props) {
        super(props);

        const page = _.find(_routes, {
            route: history.location.pathname,
        });

        if (page) {
            console.info("Setting Title for => ", page);
        } else {
            console.error("PAGE NOT AVAILABLE");
            window.location = _routes[0].route;
        }

        this.state = {
            page: page || null,
        };
    }

    render() {

        const routeComponents = _routes.map((route, key) =>
            <Route path={route.route} element={<route.component {...this.state}/>} exact key={`${route.key}`}/>);
        const {page} = this.state;

        if (!page) {
            return null;
        }

        return (
            <Router history={history}>
                <SharedComponents />
                <section id="main">
                    <section id="content">
                        <div className="container-wrapper">
                            <div className="container">
                                <Routes>
                                    {routeComponents}
                                </Routes>
                            </div>
                        </div>
                    </section>
                </section>
            </Router>
        );
    }
}
