import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Scrollbar from "react-scrollbars-custom";
import "./assets/scss/app.scss";
import AppRouter from "./Router/AppRouter";
import DataContextProvider from "./Contexts/DataContext";

function App() {
  return (
    <Scrollbar>
        <div className="app-wrapper">
            <Router>
                <DataContextProvider>
                    <AppRouter/>
                </DataContextProvider>
            </Router>
        </div>
    </Scrollbar>
  );
}

export default App;
