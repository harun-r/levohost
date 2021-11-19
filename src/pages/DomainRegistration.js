import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import Footer from "../Components/Footer/Footer";

const DomainRegistration = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="Domain Registration"
                desc="Low Prices & Huge Selection | Full Control Panel"
            />

            <Footer/>
        </Fragment>
    );
};

export default DomainRegistration;
