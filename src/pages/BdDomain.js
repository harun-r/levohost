import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import Footer from "../Components/Footer/Footer";
import SearchDomain from "../Components/SearchDomain/SearchDomain";
import BdDomainPrice from "../Components/BdDomainPrice/BdDomainPrice";
import Faq from "../Components/Faq/Faq";

const BdDomain = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading=".BD Domain Registration"
                desc="Full Control Panel | Min 2 years Registration | Lowest Price"
            />
            <SearchDomain/>
            <BdDomainPrice/>
            <Faq/>
            <Footer/>
        </Fragment>
    );
};

export default BdDomain;
