import Header from "./Components/Header/Header";
import "./assets/scss/app.scss";
import HeroHome from "./Components/HeroHome/HeroHome";
import HostingPlanBox from "./Components/HostingPlanBox/HostingPlanBox";
import Scrollbar from "react-scrollbars-custom";

function App() {
  return (
    <Scrollbar>
        <div className="app-wrapper">
            <Header />
            <HeroHome/>
            <HostingPlanBox/>
        </div>
    </Scrollbar>
  );
}

export default App;
