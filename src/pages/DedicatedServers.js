import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import Faq from "../Components/Faq/Faq";
import SupportBlock from "../Components/SupportBlock/SupportBlock";
import Footer from "../Components/Footer/Footer";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import HostingPlanSlider from "../Components/HostingPlanSlider/HostingPlanSlider";
import ExtraFeatures from "../Components/SharedComponent/ExtraFeatures/ExtraFeatures";
import HostingFeatures from "../Components/SharedComponent/HostingFeatures/HostingFeatures";
import OperatingSupport from "../Components/SharedComponent/OperatingSupport/OperatingSupport";
import ListFeatures from "../Components/SharedComponent/ListFeatures/ListFeatures";
import MoreFeatureSlider from "../Components/SharedComponent/MoreFeatureSlider/MoreFeatureSlider";

const DedicatedServers = () => {
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
            <ListFeatures/>
            <Faq/>
            <MoreFeatureSlider/>
            <SupportBlock/>
            <Footer/>
        </Fragment>
    );
};

export default DedicatedServers;
