import React, {Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import DedicatedServers from "../pages/DedicatedServers";
import VpsHosting from "../pages/VpsHosting";
import SslCertificate from "../pages/SslCertificate";
import SharedHosting from "../pages/SharedHosting";
import BusinessHosting from "../pages/BusinessHosting";
import ResellerHosting from "../pages/ResellerHosting";
import AboutUs from "../pages/AboutUs";
import Affiliate from "../pages/Affiliate";

const AppRouter = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dedicated-servers" component={DedicatedServers} />
                <Route exact path="/vps-hosting" component={VpsHosting} />
                <Route exact path="/ssl-certificate" component={SslCertificate} />
                <Route exact path="/shared-hosting" component={SharedHosting} />
                <Route exact path="/business-hosting" component={BusinessHosting} />
                <Route exact path="/reseller-hosting" component={ResellerHosting} />
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/affiliate" component={Affiliate} />
            </Switch>
        </Fragment>
    );
};

export default AppRouter;
