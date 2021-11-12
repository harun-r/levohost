import React, {Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import DedicatedServers from "../pages/DedicatedServers";
import VpsHosting from "../pages/VpsHosting";
import SslCertificate from "../pages/SslCertificate";

const AppRouter = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dedicated-servers" component={DedicatedServers} />
                <Route exact path="/vps-hosting" component={VpsHosting} />
                <Route exact path="/ssl-certificate" component={SslCertificate} />
            </Switch>
        </Fragment>
    );
};

export default AppRouter;
