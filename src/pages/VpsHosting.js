import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import HostingPlanSlider from "../Components/HostingPlanSlider/HostingPlanSlider";
import ExtraFeatures from "../Components/SharedComponent/ExtraFeatures/ExtraFeatures";
import HostingFeatures from "../Components/SharedComponent/HostingFeatures/HostingFeatures";
import OperatingSupport from "../Components/SharedComponent/OperatingSupport/OperatingSupport";
import Faq from "../Components/Faq/Faq";
import MoreFeatureSlider from "../Components/SharedComponent/MoreFeatureSlider/MoreFeatureSlider";
import SupportBlock from "../Components/SupportBlock/SupportBlock";
import Footer from "../Components/Footer/Footer";
import VpsLevelControl from "../Components/VpsLevelControl/VpsLevelControl";
import GetStarted from "../Components/SharedComponent/GetStarted/GetStarted";

const VpsHosting = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="Super Fast SSD Web Hosting"
                desc="Up To 20X Faster Page Load | Pure SSD | Free SSL Certificate"
            />
            <HostingPlanSlider/>
            <ExtraFeatures/>
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

export default VpsHosting;
