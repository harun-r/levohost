import React from "react";
import Scrollbar from "react-scrollbars-custom";

import Header from "./Components/Header/Header";
import HeroHome from "./Components/HeroHome/HeroHome";
import HostingPlanBox from "./Components/HostingPlanBox/HostingPlanBox";
import DomainSearch from "./Components/DomainSearch/DomainSearch";

import "./assets/scss/app.scss";

function App() {
  return (
    <Scrollbar>
        <div className="app-wrapper">
            <Header />
            <HeroHome/>
            <HostingPlanBox/>
            <DomainSearch/>
        </div>
    </Scrollbar>
  );
}

export default App;
