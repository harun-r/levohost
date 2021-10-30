import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeroHome from "../Components/HeroHome/HeroHome";
import HostingPlanBox from "../Components/HostingPlanBox/HostingPlanBox";
import DomainSearch from "../Components/DomainSearch/DomainSearch";
import DomainList from "../Components/DomainList/DomainList";
import Features from "../Components/Features/Features";
import ControlPanel from "../Components/ControlPanel/ControlPanel";
import Reviews from "../Components/Reviews/Reviews";
import Faq from "../Components/Faq/Faq";
import SupportBlock from "../Components/SupportBlock/SupportBlock";
import Footer from "../Components/Footer/Footer";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroHome/>
            <HostingPlanBox/>
            <DomainSearch/>
            <DomainList/>
            <Features/>
            <ControlPanel/>
            <Reviews/>
            <Faq/>
            <SupportBlock/>
            <Footer/>
        </Fragment>
    );
};

export default Home;
