import "./App.css";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {_routes} from "./utils/Routes";
import Main from "./components/pages/main";
import history from "./configuration/history";
import _ from "lodash";

export class BootApp extends React.Component {

    constructor(props) {
        super(props);

        const page = _.find(_routes, {
            route: history.location.pathname,
        });

        if (page) {
            console.error("PAGE AVAILABLE");
        } else {
            console.error("PAGE NOT AVAILABLE");
            window.location = _routes[0].route;
        }

        this.state = {
            page: page || null,
        };
    }

    componentDidMount() {
        history.listen(({pathname}) => {
            const page = _.find(_routes, {route: pathname});
            if(page) {
                console.error("SET NEW PAGE PATH");
                this.setState({page});
            } else {
                window.location = _routes[0].route;
            }
        });
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
                {/*<Main {...this.state}>*/}

                {/*</Main>*/}
                <Routes>
                    {routeComponents}
                </Routes>
            </Router>
        );
    }
}
