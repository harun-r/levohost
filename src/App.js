import Header from "./Components/Header/Header";
import "./assets/scss/app.scss";
import HeroHome from "./Components/HeroHome/HeroHome";

function App() {
  return (
    <div className="app-wrapper">
        <Header />
        <HeroHome/>
    </div>
  );
}

export default App;
