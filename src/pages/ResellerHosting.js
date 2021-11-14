import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import HostingPlans from "../Components/HostingPlans/HostingPlans";
import ExtraFeatures from "../Components/SharedComponent/ExtraFeatures/ExtraFeatures";
import Faq from "../Components/Faq/Faq";
import SupportBlock from "../Components/SupportBlock/SupportBlock";
import Footer from "../Components/Footer/Footer";
import HostingFeaturesFluid from "../Components/SharedComponent/HostingFeaturesFluid/HostingFeaturesFluid";
import GetStatedBox from "../Components/SharedComponent/GetStarted/GetStatedBox";

const ResellerHosting = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="Super Fast SSD Web Hosting"
                desc="Up To 20X Faster Page Load | Pure SSD | Free SSL Certificate"
            />
            <HostingPlans/>
            <ExtraFeatures/>
            <HostingFeaturesFluid/>
            <GetStatedBox/>
            <Faq/>
            <SupportBlock/>
            <Footer/>
        </Fragment>
    );
};

export default ResellerHosting;
