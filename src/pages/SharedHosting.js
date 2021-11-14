import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import ExtraFeatures from "../Components/SharedComponent/ExtraFeatures/ExtraFeatures";
import SupportBlock from "../Components/SupportBlock/SupportBlock";
import Footer from "../Components/Footer/Footer";
import HostingPlans from "../Components/HostingPlans/HostingPlans";
import HostingFeaturesNoHead from "../Components/SharedComponent/HostingFeatures/HostingFeaturesNoHead";
import Faq from "../Components/Faq/Faq";
import ReadyToStart from "../Components/SharedComponent/ReadyToStart/ReadyToStart";

const SharedHosting = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="Super Fast SSD Web Hosting"
                desc="Up To 20X Faster Page Load | Pure SSD | Free SSL Certificate"
            />
            <HostingPlans/>
            <ExtraFeatures/>
            <HostingFeaturesNoHead/>
            <ReadyToStart/>
            <Faq/>
            <SupportBlock/>
            <Footer/>
        </Fragment>
    );
};

export default SharedHosting;
