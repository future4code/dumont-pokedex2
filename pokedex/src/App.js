import Router from "./Router/index"
import React from "react";
import GlobalState from "./Global/GlobalState"
import './App.css';

function App() {
  return (
    <GlobalState>
     <Router/>
    </GlobalState>
  );
}

export default App;
