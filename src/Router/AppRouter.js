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
import FaqAll from "../pages/FaqAll";
import Tos from "../pages/Tos";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Contact from "../pages/Contact";
import DomainRegistration from "../pages/DomainRegistration";
import BdDomain from "../pages/BdDomain";

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
                <Route exact path="/faq" component={FaqAll} />
                <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                <Route exact path="/tos" component={Tos} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/domain-registration" component={DomainRegistration} />
                <Route exact path="/bd-domain" component={BdDomain} />
            </Switch>
        </Fragment>
    );
};

export default AppRouter;
