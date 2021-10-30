import React from "react";
import Scrollbar from "react-scrollbars-custom";
import "./assets/scss/app.scss";

import Home from "./pages/Home";

function App() {
  return (
    <Scrollbar>
        <div className="app-wrapper">
           <Home/>
        </div>
    </Scrollbar>
  );
}

export default App;
