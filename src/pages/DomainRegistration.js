import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import Footer from "../Components/Footer/Footer";
import SearchDomain from "../Components/SearchDomain/SearchDomain";
import DomainPrice from "../Components/DomainPrice/DomainPrice";
import DomainAddons from "../Components/DomainAddons/DomainAddons";
import TransferDomainShowcase from "../Components/TransferDomainShowcase/TransferDomainShowcase";
import Faq from "../Components/Faq/Faq";

const DomainRegistration = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="Domain Registration"
                desc="Low Prices & Huge Selection | Full Control Panel"
            />
            <SearchDomain/>
            <DomainPrice/>
            <DomainAddons/>
            <TransferDomainShowcase/>
            <Faq/>
            <Footer/>
        </Fragment>
    );
};

export default DomainRegistration;
