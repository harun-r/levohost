import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import HostingPlanSlider from "../Components/HostingPlanSlider/HostingPlanSlider";
import ExtraFeatures from "../Components/SharedComponent/ExtraFeatures/ExtraFeatures";
import SupportBlock from "../Components/SupportBlock/SupportBlock";
import Footer from "../Components/Footer/Footer";
import WhatSsl from "../Components/WhatSSL/WhatSSL";
import SslReasons from "../Components/SSLReasons/SSLReasons";
import SslFacility from "../Components/SslFacility/SslFacility";
import SslSetup from "../Components/SSLSetup/SSLSetup";

const SslCertificate = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="Super Fast SSD Web Hosting"
                desc="Up To 20X Faster Page Load | Pure SSD | Free SSL Certificate"
            />
            <HostingPlanSlider/>
            <ExtraFeatures/>
            <WhatSsl/>
            <SslReasons/>
            <SslFacility/>
            <SslSetup/>
            <SupportBlock/>
            <Footer/>
        </Fragment>
    );
};

export default SslCertificate;
