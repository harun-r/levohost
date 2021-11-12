import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import HostingPlanSlider from "../Components/HostingPlanSlider/HostingPlanSlider";
import ExtraFeatures from "../Components/SharedComponent/ExtraFeatures/ExtraFeatures";
import HostingFeatures from "../Components/SharedComponent/HostingFeatures/HostingFeatures";
import OperatingSupport from "../Components/SharedComponent/OperatingSupport/OperatingSupport";
import VpsLevelControl from "../Components/VpsLevelControl/VpsLevelControl";
import GetStarted from "../Components/SharedComponent/GetStarted/GetStarted";
import Faq from "../Components/Faq/Faq";
import MoreFeatureSlider from "../Components/SharedComponent/MoreFeatureSlider/MoreFeatureSlider";
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
            <HostingFeatures/>
            <OperatingSupport/>
            <VpsLevelControl/>
            <GetStarted/>
            <Faq/>
            <MoreFeatureSlider/>
            <SupportBlock/>
            <Footer/>
        </Fragment>
    );
};

export default SslCertificate;
