import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Scrollbar from "react-scrollbars-custom";
import "./assets/scss/app.scss";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <Scrollbar>
        <div className="app-wrapper">
            <Router>
                <AppRouter/>
            </Router>
        </div>
    </Scrollbar>
  );
}

export default App;
