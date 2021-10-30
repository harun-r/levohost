import React from "react";
import Scrollbar from "react-scrollbars-custom";
import Header from "./Components/Header/Header";
import HeroHome from "./Components/HeroHome/HeroHome";
import HostingPlanBox from "./Components/HostingPlanBox/HostingPlanBox";
import DomainSearch from "./Components/DomainSearch/DomainSearch";
import DomainList from "./Components/DomainList/DomainList";
import Features from "./Components/Features/Features";
import ControlPanel from "./Components/ControlPanel/ControlPanel";
import Reviews from "./Components/Reviews/Reviews";

import "./assets/scss/app.scss";
function App() {
  return (
    <Scrollbar>
        <div className="app-wrapper">
            <Header />
            <HeroHome/>
            <HostingPlanBox/>
            <DomainSearch/>
            <DomainList/>
            <Features/>
            <ControlPanel/>
            <Reviews/>
        </div>
    </Scrollbar>
  );
}

export default App;
